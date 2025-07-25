import type { ReactNode } from "react";
import Header from "../../components/Header/Header";
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
        <Header />
      </div>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
