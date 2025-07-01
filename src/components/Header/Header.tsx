import Hero from "../Hero/Hero";
import NavLinks from "../NavLinks/NavLinks";
import Contacts from "../contacts/Contacts";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Hero/>
        <NavLinks/>
      </div>
      <Contacts/>
    </header>
  );
};

export default Header;
