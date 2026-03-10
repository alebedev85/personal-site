import clsx from "clsx";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Hero.module.scss";

type HeaderProps = {
  className?: string;
};

const Hero = ({ className }: HeaderProps) => {
  return (
    <div className={clsx(styles.header, className)}>
      <div className={styles.top}>
        <About />
        <NavLinks />
      </div>
      <Contacts />
    </div>
  );
};

export default Hero;
