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
        <div className={styles.scoreboardTop}>
          <button
            className={`${styles.playerButton} ${
              theme === "dark" ? styles.playerButtonActive : ""
            }`}
            type="button"
            onClick={() => changeTheme("dark")}
            aria-pressed={theme === "dark"}
          >
            <span>1UP</span>
            <span className={styles.redDot} />
          </button>
          <Link className={styles.highScoreLabel} href="/">
            HI-SCORE
          </Link>
          <button
            className={`${styles.playerButton} ${
              theme === "light" ? styles.playerButtonActive : ""
            }`}
            type="button"
            onClick={() => changeTheme("light")}
            aria-pressed={theme === "light"}
          >
            <span className={styles.cyanDot} />
            <span>2UP</span>
          </button>
        </div>
        <div className={styles.scoreboardBottom}>
          <span className={styles.scoreLabel}>002026</span>
          <span className={styles.scoreValue} aria-label={`High score ${score}`}>
            {score}
          </span>
          <div className={styles.languageSwitch} aria-label="Language">
            <button
              type="button"
              className={language === "ru" ? styles.languageActive : ""}
              onClick={() => changeLanguage("ru")}
              aria-pressed={language === "ru"}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              className={language === "en" ? styles.languageActive : ""}
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
