import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.about}>
      <span className={styles.preTitle}>{t("hero.preTitle")}</span>
      <h1 className={styles.name}>{t("hero.name")}</h1>
      <p className={styles.subtitle}>{t("hero.subtitle")}</p>
      <p className={styles.description}>{t("hero.description")}</p>
    </section>
  );
};

export default About;
