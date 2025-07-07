import { ThemeToggle } from '../ui/ThemeToggle/ThemeToggle';
import styles from './ToggleControls.module.scss'

export default function ToggleControls() {
  return <div className={styles.controls}>
    <ThemeToggle />
  </div>;
}