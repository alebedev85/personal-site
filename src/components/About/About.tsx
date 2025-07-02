import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>
        Обо мне:
      </h2>
      <p className={styles.text}>
        Я фронтенд-разработчик с двухлетним опытом, увлечённый созданием удобных
        и эстетичных пользовательских интерфейсов. Участвовал в двух стартапах:{` `}
        <a
          href="https://service.re-action.online"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Re-Action (opens in a new tab)`}
          title="Re-Action"
        >
          Re-Action
        </a>{" "}
        - сервис для автоматической рассылки резюме,{" "}
        <a
          href="https://wellcards.co"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Wellcards (opens in a new tab)`}
          title="Wellcards"
        >
          Wellcards
        </a>{" "}
        - выпуск виртуальных карт. Постоянно изучаю новые технологии и
        инструменты, стремлюсь развиваться и решать реальные задачи. Ищу
        интересные и полезные проекты, в которых можно создавать качественный и
        значимый продукт.
      </p>
    </section>
  );
}
