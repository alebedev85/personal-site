import styles from './Skills.module.scss';

const skills = ['React', 'TypeScript', 'Redux', 'SCSS', 'Vite'];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>Мои навыки</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;