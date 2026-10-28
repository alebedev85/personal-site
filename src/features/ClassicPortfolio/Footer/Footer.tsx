import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {t("footer.description")}{" "}
        <a
          href="https://github.com/alebedev85/personal-site"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={"GitHub link (opens in a new tab)"}
          title="GitHub link"
        >
          GitHub
        </a>
        . {t("footer.font")}
      </p>
      <br />
      <p className={styles.text}>
        © {new Date().getFullYear()} {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
