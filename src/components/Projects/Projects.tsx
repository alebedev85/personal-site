import type { IProject } from "../../data/projects";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Проекты: </h2>
    {projects.map((projectData: IProject, index) => (
      <ProjectCard key={index} {...projectData} />
    ))}
  </section>
);

export default Projects;
