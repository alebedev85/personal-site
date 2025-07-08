import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { toggleLanguage } from "../../../store/slices/togglesSlice";
import type { LanguageType } from "../../../types";
import styles from "./LanguageToggle.module.scss";

export const LanguageToggle = () => {
  const language = useSelector((state: RootState) => state.toggles.language);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: LanguageType) => {
    i18n.changeLanguage(lng);
    dispatch(toggleLanguage());
  };

  return (
    <div className={styles.languageToggle}>
      <button
        onClick={() => changeLanguage("ru")}
        className={`${styles.languageButton} ${
          language === "ru" ? styles.active : ""
        }`}
      >
        Ru
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.languageButton} ${
          language === "en" ? styles.active : ""
        }`}
      >
        En
      </button>
    </div>
  );
};
