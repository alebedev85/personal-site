import Hero from "../Hero/Hero";
import NavLinks from "../NavLinks/NavLinks";
import Contacts from "../Contacts1/Contacts";
import styles from "./Header.module.scss";
import clsx from "clsx";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.top}>
        <Hero />
        <NavLinks />
      </div>
      <Contacts />
    </header>
  );
};

export default Header;
