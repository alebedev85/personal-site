import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projects}>
      <h2>{t("projects.title")}</h2>
      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              {...project}
              title={t(`projects.${project.id}.title`)}
              description={t(`projects.${project.id}.description`)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
