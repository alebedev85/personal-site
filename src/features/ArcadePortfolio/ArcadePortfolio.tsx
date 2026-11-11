"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./ArcadePortfolio.module.scss";
import BioSection from "./BioSection/BioSection";
import ContactSection from "./ContactSection/ContactSection";
import Header from "./Header/Header";
import SkillInventory from "./SkillInventory/SkillInventory";
import Starfield from "./Starfield";
import StageList from "./StageList/StageList";
import ArcadeSidebar from "./ArcadeSidebar/ArcadeSidebar";

// Порядок важен: при прокрутке выбирается последний раздел, верхняя граница
// которого уже прошла контрольную линию в верхней части окна.
const sectionIds = ["bio", "skills", "stages", "contact"];

const ArcadePortfolio = () => {
  // Счётчик отображается в шапке и обновляется в зависимости от общего прогресса прокрутки.
  const [score, setScore] = useState("000000");
  // Активный раздел нужен боковой панели для подсветки текущего пункта навигации.
  const [activeSection, setActiveSection] = useState("bio");
  // Тема берётся из Redux, чтобы одинаково оформить фон и корневой контейнер страницы.
  const theme = useSelector((state: RootState) => state.toggles.theme);

  useEffect(() => {
    const updateProgress = () => {
      // Высота прокручиваемой области без видимой части окна. Если прокрутки нет,
      // прогресс равен нулю, чтобы не делить на ноль.
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Ограничиваем значение диапазоном 0..1: score всегда остаётся в диапазоне 000000..999999.
      const progress =
        scrollableHeight > 0
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
          : 0;
      setScore(String(Math.floor(progress * 999999)).padStart(6, "0"));

      // В некоторых макетах высота body и documentElement различается.
      // Проверяем нижнюю границу по большей высоте, чтобы последний раздел
      // корректно становился активным даже при прокрутке до самого конца страницы.
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      const isAtPageBottom =
        window.scrollY + window.innerHeight >= pageHeight - 2;

      if (isAtPageBottom) {
        // У последнего раздела может не хватать высоты, чтобы его заголовок
        // пересёк контрольную линию; внизу страницы явно активируем контакты.
        setActiveSection("contact");
      } else {
        // Ищем с конца, чтобы выбрать ближайший к текущей позиции раздел,
        // а не первый раздел страницы, который уже прошёл контрольную линию.
        const currentSection = [...sectionIds]
          .reverse()
          .find((id) => {
            const element = document.getElementById(id);
            return element && element.getBoundingClientRect().top <= 180;
          });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Синхронизируем интерфейс сразу после монтирования, в том числе если
    // страница была восстановлена браузером на прежней позиции прокрутки.
    updateProgress();
    // Пассивный обработчик прокрутки не блокирует прокрутку браузера.
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      // Убираем обработчики при размонтировании, чтобы не обновлять состояние
      // уже неактивного компонента и не удерживать на него ссылки.
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Тема на корневом контейнере позволяет вложенным стилям использовать единый набор CSS-переменных.
  return (
    <div className={`${styles.page} arcadePage`} data-theme={theme}>
      <Starfield theme={theme} />
      <Header score={score} />
      <div className={styles.shell}>
        <div className={styles.columns}>
          <ArcadeSidebar activeSection={activeSection} />
          <main className={styles.mainContent}>
            {/* Порядок секций совпадает с навигацией и идентификаторами для отслеживания прокрутки. */}
            <BioSection />
            <SkillInventory />
            <StageList />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ArcadePortfolio;
