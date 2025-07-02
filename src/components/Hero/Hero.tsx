import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.preTitle}>Привет, меня зовут</p>
      <h1 className={styles.name}>Андрей Лебедев</h1>
      <p className={styles.subtitle}>Я фронтенд-разработчик</p>
      <p className={styles.description}>
        Создаю интерфейсы, которыми хочется пользоваться
      </p>
    </section>
  );
};

export default Hero;
