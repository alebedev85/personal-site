import { MdArrowOutward } from "react-icons/md";
import type { IProject } from "../../data/projects";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  title,
  description,
  url,
  technologies,
  imgSrc,
  imgAlt,
}: IProject) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={`${title} (opens in a new tab)`}
    className={styles.cardLink}
  >
    <div className={styles.background}></div>
    <img
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
      width={200}
      height={48}
      className={styles.image}
    />
    <div className={styles.content}>
      <h3>
        <span className={styles.titleLink}>
          {title}{" "}
          <MdArrowOutward className={styles.iconArrow} aria-hidden="true" />
        </span>
      </h3>

      <p className={styles.description}>{description}</p>

      <ul className={styles.techList} aria-label="Technologies used:">
        {technologies.map((tech) => (
          <li key={tech} className={styles.techItem}>
            <div className={styles.techBadge}>{tech}</div>
          </li>
        ))}
      </ul>
    </div>
  </a>
);

export default ProjectCard;
