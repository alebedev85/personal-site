"use client";

import { useTranslation } from "react-i18next";
import styles from "./BackToTop.module.scss";

type BackToTopProps = {
  isVisible: boolean;
};

const BackToTop = ({ isVisible }: BackToTopProps) => {
  const { t } = useTranslation();

  if (!isVisible) return null;

  return (
    <button
      className={styles.backToTop}
      type="button"
      aria-label={t("nav.backToTop")}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
    >
      <span className={styles.backToTopIcon} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
