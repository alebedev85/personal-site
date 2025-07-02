import { useEffect, useState } from "react";

/**
 * Хук для отслеживания активной секции на странице по её ID
 * @param sectionIds - массив ID секций (без #), которые нужно отслеживать
 * @returns activeId - текущий активный якорь (с #), setActiveManually - функция для ручного обновления активного ID
 */
export const useActiveSection = (sectionIds: string[]) => {
  // Состояние для хранения активного идентификатора секции (с символом #)
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Создаём IntersectionObserver, который будет отслеживать видимость секций
    const observer = new IntersectionObserver(
      (entries) => {
        // Ищем первую видимую секцию
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          // Обновляем активный ID с префиксом #
          setActiveId(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px", // сдвигаем нижнюю границу, чтобы срабатывало раньше
        threshold: 0.1, // срабатывание при 10% видимости секции
      }
    );

    // Подписываемся на все элементы с заданными ID
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Очистка: отписываемся от всех элементов при размонтировании или изменении sectionIds
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  /**
   * Функция для ручного обновления активного ID,
   * например при клике на ссылку в меню
   * @param id - ID ссылки (с #)
   */
  const setActiveManually = (id: string) => {
    setActiveId(id);
  };

  // Возвращаем текущее активное значение и функцию для ручного обновления
  return { activeId, setActiveManually };
};
