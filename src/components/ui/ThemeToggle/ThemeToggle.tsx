import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { toggleTheme } from "../../../store/slices/togglesSlice";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.toggles.theme);
  const dispatch = useDispatch();

  return (
    <label className={styles.switch}>
      <span className={styles.sun}>
        <BsSunFill />
      </span>
      <span className={styles.moon}>
        <BsMoonFill />
      </span>
      <input
        type="checkbox"
        className={styles.input}
        checked={theme === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
