import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.text}>
      Дизайн прототипирован в Figma и реализован вручную в Visual Studio Code.
      Сайт построен на React с использованием Redux Toolkit для управления
      состоянием, написан на TypeScript и стилизован с помощью SCSS-модулей.
      Сборка осуществляется через Vite. Проект развёрнут на Vercel. Исходный код
      доступен в репозитории на {' '}
      <a
        href="https://github.com/alebedev85/personal-site"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={"GitHub link (opens in a new tab)"}
        title="GitHub link"
      >
        GitHub
      </a>
      . Основной шрифт — Inter.
    </p>
    <br />
    <p className={styles.text}>© {new Date().getFullYear()} Андрей Лебедев. Все права защищены.</p>
  </footer>
);

export default Footer;
