import About from "../About/About";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Projects from '../Projects/Projects';
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.content}>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default MainContent;
