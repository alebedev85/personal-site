"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { toggleLanguage, toggleTheme } from "../../../store/slices/togglesSlice";
import type { LanguageType, ThemeType } from "../../../types";
import styles from "./Header.module.scss";

type ScoreboardProps = {
  score: string;
};

const Header = ({ score }: ScoreboardProps) => {
  const theme = useSelector((state: RootState) => state.toggles.theme);
  const language = useSelector((state: RootState) => state.toggles.language);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const changeTheme = (nextTheme: ThemeType) => {
    if (theme !== nextTheme) {
      dispatch(toggleTheme());
    }
  };

  const changeLanguage = (nextLanguage: LanguageType) => {
    if (language !== nextLanguage) {
      dispatch(toggleLanguage());
    }
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className={styles.scoreboard}>
      <div className={styles.scoreboardInner}>
        <div className={styles.playerGroup}>
          <button
            className={`${styles.playerButton} ${styles.playerButtonDark}`}
            type="button"
            onClick={() => changeTheme("dark")}
            aria-pressed={theme === "dark"}
          >
            <span className={styles.playerText}>1UP</span>
            <span className={styles.redDot} aria-hidden="true" />
          </button>
          <span className={styles.scoreLabel}>002026</span>
        </div>
        <Link
          className={`${styles.playerGroup} ${styles.highScoreLink}`}
          href="/old"
        >
          <span className={`${styles.highScoreLabel} ${styles.playerText}`}>
            HI-SCORE
          </span>
          <span className={styles.scoreValue} aria-label={`High score ${score}`}>
            {score}
          </span>
        </Link>
        <div className={`${styles.playerGroup} ${styles.playerGroupRight}`}>
          <button
            className={`${styles.playerButton} ${styles.playerButtonLight}`}
            type="button"
            onClick={() => changeTheme("light")}
            aria-pressed={theme === "light"}
          >
            <span className={styles.cyanDot} aria-hidden="true" />
            <span className={styles.playerText}>2UP</span>
          </button>
          <div className={styles.languageSwitch} aria-label="Language">
            <button
              type="button"
              className={`${styles.languageButton} ${
                language === "ru" ? styles.languageActive : ""
              }`}
              onClick={() => changeLanguage("ru")}
              aria-pressed={language === "ru"}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              className={`${styles.languageButton} ${
                language === "en" ? styles.languageActive : ""
              }`}
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
