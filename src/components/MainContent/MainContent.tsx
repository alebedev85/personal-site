
import Skills from '../Skills/Skills';
// import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import styles from "./MainContent.module.scss"

const MainContent = () => {
  return (
    <main className={styles.content}>
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
};

export default MainContent;
