import { ThemeToggle } from '../ui/ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle/LanguageToggle';
import styles from './Toggles.module.scss'
import clsx from "clsx";

type TogglesProps = {
  className?: string;
};

const Toggles = ({ className }: TogglesProps) => {
  return <div className={clsx(styles.toggles, className)}>
    <LanguageToggle />
    <ThemeToggle />
  </div>;
}

export default Toggles;