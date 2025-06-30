import styles from './Hero.module.scss';

const Hero = () => (
  <section id="about" className={styles.hero}>
    <h1>Привет, я Андрей</h1>
    <p>Фронтенд-разработчик, специализируюсь на React и TypeScript</p>
    <a href="#projects" className={styles.button}>Посмотреть проекты</a>
  </section>
);

export default Hero;