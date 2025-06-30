import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <a href="#about">Обо мне</a>
      <a href="#skills">Навыки</a>
      <a href="#projects">Проекты</a>
      <a href="#contact">Контакты</a>
    </nav>
  </header>
);

export default Header;