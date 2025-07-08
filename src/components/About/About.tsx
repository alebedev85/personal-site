import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>
        {t("about.title")}
      </h2>
      <p className={styles.text}>
        {t("about.description.part1")}{" "}
        <a
          href="https://service.re-action.online"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t("about.links.reaction.ariaLabel")}
          title={t("about.links.reaction.title")}
        >
          {t("about.links.reaction.text")}
        </a>{" "}
        {t("about.description.part2")}{" "}
        <a
          href="https://wellcards.co"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={t("about.links.wellcards.ariaLabel")}
          title={t("about.links.wellcards.title")}
        >
          {t("about.links.wellcards.text")}
        </a>{" "}
        {t("about.description.part3")}
      </p>
    </section>
  );
}
