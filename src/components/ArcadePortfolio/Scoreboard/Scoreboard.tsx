"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { toggleLanguage, toggleTheme } from "../../../store/slices/togglesSlice";
import type { LanguageType, ThemeType } from "../../../types";
import "./Scoreboard.scss";

type ScoreboardProps = {
  score: string;
};

const Scoreboard = ({ score }: ScoreboardProps) => {
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
    <header className={"scoreboard"}>
      <div className={"scoreboardInner"}>
        <div className={"scoreboardTop"}>
          <button
            className={`${"playerButton"} ${
              theme === "dark" ? "playerButtonActive" : ""
            }`}
            type="button"
            onClick={() => changeTheme("dark")}
            aria-pressed={theme === "dark"}
          >
            <span>1UP</span>
            <span className={"redDot"} />
          </button>
          <Link className={"highScoreLabel"} href="/">
            HI-SCORE
          </Link>
          <button
            className={`${"playerButton"} ${
              theme === "light" ? "playerButtonActive" : ""
            }`}
            type="button"
            onClick={() => changeTheme("light")}
            aria-pressed={theme === "light"}
          >
            <span className={"cyanDot"} />
            <span>2UP</span>
          </button>
        </div>
        <div className={"scoreboardBottom"}>
          <span className={"scoreLabel"}>002026</span>
          <span className={"scoreValue"} aria-label={`High score ${score}`}>
            {score}
          </span>
          <div className={"languageSwitch"} aria-label="Language">
            <button
              type="button"
              className={language === "ru" ? "languageActive" : ""}
              onClick={() => changeLanguage("ru")}
              aria-pressed={language === "ru"}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              className={language === "en" ? "languageActive" : ""}
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

export default Scoreboard;
