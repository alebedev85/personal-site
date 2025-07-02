import type { IProject } from "../../data/projects";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Проекты: </h2>
    <ul className={styles.projectsList}>
      {projects.map((projectData: IProject, index) => (
        <li key={index}>
          <ProjectCard {...projectData} />
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
