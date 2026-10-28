import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiLink } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import type { IProject } from "../../../types";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  title,
  description,
  projectLink,
  gitHubLink,
  technologies,
  imgSrc,
  imgAlt,
}: IProject) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  return (
    <article
      className={`${styles.cardLink} ${
        isLinkHovered ? styles.linkHovered : ""
      }`}
    >
      <div className={styles.background}></div>
      <h3>
        <Link
          className={styles.title}
          href={gitHubLink}
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub link"
          aria-label={`GitHub link ${title} (opens in a new tab)`}
        >
          {title}{" "}
          <MdArrowOutward className={styles.iconArrow} aria-hidden="true" />
        </Link>
      </h3>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={200}
        height={48}
        sizes="(max-width: 768px) 100vw, 200px"
        className={styles.image}
      />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>

        <Link
          className={styles.link}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Project link"
          aria-label={`Project link${title} (откроется в новой вкладке)`}
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          <HiLink className={styles.icon} />
          <span>{"Website"}</span>
        </Link>

        <ul className={styles.techList} aria-label="Technologies used:">
          {technologies.map((tech: string) => (
            <li key={tech} className={styles.techItem}>
              <div className={styles.techBadge}>{tech}</div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
