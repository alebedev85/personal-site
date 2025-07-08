import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.hero}>
      <p className={styles.preTitle}>{t("hero.preTitle")}</p>
      <h1 className={styles.name}>{t("hero.name")}</h1>
      <p className={styles.subtitle}>{t("hero.subtitle")}</p>
      <p className={styles.description}>{t("hero.description")}</p>
    </section>
  );
};

export default Hero;
