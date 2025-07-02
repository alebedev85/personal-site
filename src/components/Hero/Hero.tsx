import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <a className={styles.preTitle} href="#hero">Привет, меня зовут</a>
      <h1 className={styles.name}>Андрей Лебедев</h1>
      <p className={styles.subtitle}>Я фронтенд-разработчик</p>
      <p className={styles.description}>
        Создаю интерфейсы, которыми хочется пользоваться
      </p>
    </section>
  );
};

export default Hero;
