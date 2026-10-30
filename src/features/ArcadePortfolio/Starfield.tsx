"use client";

import { useEffect, useRef } from "react";
import styles from "./ArcadePortfolio.module.scss";

/**
 * Количество звёзд, одновременно отображаемых на canvas.
 * Фиксированное число ограничивает стоимость перерисовки каждого кадра.
 */
const STAR_COUNT = 180;

/**
 * Минимальная глубина, после которой звезда считается пролетевшей мимо камеры.
 * Глубина не доходит до нуля, поэтому перспективные координаты не делятся на ноль.
 */
const MIN_DEPTH = 0.04;

/**
 * Положение звезды в нормализованной плоскости и параметры её движения.
 *
 * x и y — направление относительно центра экрана в диапазоне от -1 до 1.
 * depth — расстояние от камеры: чем оно меньше, тем звезда выглядит крупнее
 * и тем дальше она находится от центра при перспективной проекции.
 * speed — скорость уменьшения depth в секунду.
 */
type Star = {
  x: number;
  y: number;
  depth: number;
  speed: number;
};

/**
 * Создаёт новую звезду в случайном направлении и на заднем плане.
 * Звёзды появляются с depth от 0.5 до 1, чтобы входить в сцену небольшими.
 */
const createStar = (): Star => ({
  x: Math.random() * 2 - 1,
  y: Math.random() * 2 - 1,
  depth: 0.5 + Math.random() * 0.5,
  speed: 0.2 + Math.random() * 0.25,
});

/**
 * Рисует декоративный пиксельный звёздный фон на отдельном canvas.
 *
 * Размер и позиционирование canvas задаются классом `starfield` в
 * `ArcadePortfolio.module.scss`: фон закреплён относительно окна и не участвует
 * в прокрутке страницы. Canvas имеет `aria-hidden`, так как звёзды — декор,
 * не несущий информации для скринридеров.
 *
 * Анимация работает только на клиенте: обращение к окну браузера и canvas
 * выполняется в эффекте после монтирования компонента.
 */
const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      // Ошибка инициализации не должна выглядеть как успешно отрисованный фон.
      throw new Error("Unable to initialize the starfield canvas.");
    }

    // Учитываем системную настройку уменьшения движения и изменения во время работы.
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const stars = Array.from({ length: STAR_COUNT }, createStar);
    let width = 0;
    let height = 0;
    let lastFrameTime = 0;
    let animationFrame = 0;

    /**
     * Подгоняет буфер canvas под размер viewport и плотность пикселей экрана.
     * Лимит pixelRatio в 2 предотвращает избыточный расход памяти на дисплеях
     * с очень высокой плотностью пикселей.
     */
    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      // Масштабируем canvas для экранов с высокой плотностью пикселей.
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    /**
     * Очищает и рисует один кадр.
     * requestAnimationFrame передаёт timestamp в миллисекундах; delta переводит
     * прошедшее время в секунды, чтобы скорость движения не зависела от FPS.
     */
    const draw = (timestamp: number) => {
      // Ограничиваем скачок времени, если вкладка долго была неактивна.
      const delta = lastFrameTime
        ? Math.min((timestamp - lastFrameTime) / 1000, 0.05)
        : 0;
      lastFrameTime = timestamp;

      context.clearRect(0, 0, width, height);
      const reducedMotion = motionPreference.matches;
      const focalLength = Math.max(width, height) * 0.5;

      stars.forEach((star) => {
        if (reducedMotion) {
          // При отключённой анимации оставляем звёзды в статичных позициях.
          // Нормализованные координаты переводятся в границы viewport.
          const x = ((star.x + 1) / 2) * width;
          const y = ((star.y + 1) / 2) * height;
          context.fillStyle = "#fff";
          context.fillRect(Math.round(x), Math.round(y), 2, 2);
          return;
        }

        star.depth -= star.speed * delta;
        // Перспективная проекция от центра создаёт эффект полёта на зрителя.
        // Деление на уменьшающийся depth раздвигает координаты от центра.
        const x = width / 2 + (star.x / star.depth) * focalLength;
        const y = height / 2 + (star.y / star.depth) * focalLength;

        // Вышедшая за пределы сцены или достигшая камеры звезда начинает путь заново.
        if (
          star.depth <= MIN_DEPTH ||
          x < 0 ||
          x > width ||
          y < 0 ||
          y > height
        ) {
          Object.assign(star, createStar());
          return;
        }

        // Ближние звёзды становятся крупнее; округление сохраняет резкие пиксели.
        const size = Math.max(1, Math.round((1 - star.depth) * 4));
        context.fillStyle = "#fff";
        context.fillRect(Math.round(x), Math.round(y), size, size);
      });

      // При reduced motion кадр не планируется повторно: остаётся статичное поле.
      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    /**
     * Перезапускает цикл с новым временным базисом, не оставляя параллельных RAF.
     */
    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTime = 0;
      animationFrame = window.requestAnimationFrame(draw);
    };

    /** При изменении viewport пересчитывает размеры canvas и обновляет кадр. */
    const handleResize = () => {
      resize();
      startAnimation();
    };

    /** Переключает статичный или анимированный режим при изменении системной настройки. */
    const handleMotionPreferenceChange = () => {
      startAnimation();
    };

    // Инициализируем размеры и запускаем первый кадр при монтировании.
    handleResize();
    window.addEventListener("resize", handleResize);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      // Отменяем кадр и снимаем слушатели, чтобы не оставлять работу после размонтирования.
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, []);

  // Canvas не перехватывает ввод и скрыт от вспомогательных технологий как декор.
  return (
    <canvas
      ref={canvasRef}
      className={styles.starfield}
      aria-hidden="true"
    />
  );
};

export default Starfield;
