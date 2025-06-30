import styles from './Projects.module.scss';
import projects from '../../data/projects';

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Проекты</h2>
    <div className={styles.grid}>
      {projects.map(({ id, name, description, demo, repo }) => (
        <div key={id} className={styles.card}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={demo} target="_blank" rel="noreferrer">Демо</a>
          {' | '}
          <a href={repo} target="_blank" rel="noreferrer">Код</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;