import clsx from "clsx";
import Link from "next/link";
import { LanguageToggle } from "../ui/LanguageToggle/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle/ThemeToggle";
import styles from "./Toggles.module.scss";

type TogglesProps = {
  className?: string;
};

const Toggles = ({ className }: TogglesProps) => {
  return (
    <div className={clsx(styles.header, className)}>
      <Link className={styles.newVersionLink} href="/">
        Go to New
      </Link>
      <div className={styles.toggles}>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Toggles;
