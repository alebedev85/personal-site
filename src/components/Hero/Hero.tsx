import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <a className={styles.preTitle} href="#hero">Привет, меня зовут</a>
      <h1 className={styles.name}>Андрей Лебедев</h1>
      <h2 className={styles.subtitle}>Я фронтенд разработчик</h2>
      <p className={styles.description}>
        Создаю интерфейсы, которые работают
      </p>
    </section>
  );
};

export default Hero;
