import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Hero from "../Hero/Hero";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Hero/>
        <NavLinks/>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/..." target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://t.me/..." target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </header>
  );
};

export default Header;
