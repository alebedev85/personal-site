import Biography from "../Biography/Biography";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.content}>
      <Biography />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default MainContent;
