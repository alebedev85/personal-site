import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Hero from "../Hero/Hero";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Hero/>
        <nav className={styles.nav}>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/..." target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://t.me/..." target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </header>
  );
};

export default Sidebar;
