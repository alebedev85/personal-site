import { ThemeToggle } from '../ui/ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle/LanguageToggle';
import styles from './Toggles.module.scss'

export default function ToggleControls() {
  return <div className={styles.controls}>
    <LanguageToggle />
    <ThemeToggle />
  </div>;
}