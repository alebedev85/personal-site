import About from "../About/About";
import Skills from "../Skills/Skills";
// import Projects from '../Projects/Projects';
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <main className={styles.content}>
      <About />
      <Skills />
      {/* <Projects /> */}
    </main>
  );
};

export default MainContent;
