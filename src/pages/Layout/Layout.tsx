import type { ReactNode } from "react";
import Hero from "../../components/Hero/Hero";
import Toggles from "../../components/Toggles/Toggles";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.togglesWrapper}>
        <Toggles />
      </div>
      <div className={styles.sidebar}>
        <Hero />
      </div>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
