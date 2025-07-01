import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.preTitle}>Привет, меня зовут</p>
      <h1 className={styles.name}>Андрей Лебедев</h1>
      <h2 className={styles.subtitle}>Я фронтенд разработчик</h2>
      <p className={styles.description}>
        Создаю интерфейсы, которые работают
      </p>
    </section>
  );
};

export default Hero;
