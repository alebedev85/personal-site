import clsx from "clsx";
import Contacts from "../Contacts/Contacts";
import Hero from "../Hero/Hero";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

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
