import { toggleLanguage } from "../../../store/slices/togglesSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store";
import styles from "./LanguageToggle.module.scss";

export const LanguageToggle = () => {
  const language = useSelector((state: RootState) => state.toggles.language);
  const dispatch = useDispatch();

  return (
    <div className={styles.languageToggle}>
      <button
        onClick={() => dispatch(toggleLanguage())}
        className={`${styles.languageButton} ${language === "ru" ? styles.active : ""}`}
      >
        Ru
      </button>
      <button
        onClick={() => dispatch(toggleLanguage())}
        className={`${styles.languageButton} ${language === "en" ? styles.active : ""}`}
      >
        En
      </button>
    </div>
  );
};
