"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import styles from "./ArcadePortfolio.module.scss";

const statusLabels = [
  "AI BOSS LEVEL",
  "FULLSTACK ZONE",
  "DRAG & DROP",
  "TASK MANAGER",
  "SOUND ENGINE",
  "VANILLA OOP",
  "REST API HUNT",
  "WORLD DATA",
];

const screenColors = [
  styles.screenGreen,
  styles.screenCyan,
  styles.screenYellow,
  styles.screenRed,
  styles.screenPurple,
  styles.screenYellow,
  styles.screenCyan,
  styles.screenGreen,
];

const StageList = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="stages">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeading}>
          <span className={`${styles.sectionMarker} ${styles.markerCyan}`} />
          <h2>СПИСОК ИГР / STAGES</h2>
        </div>
        <span className={`${styles.statusBadge} ${styles.statusCyan}`}>
          {projects.length} STAGES AVAILABLE
        </span>
      </div>

      <div className={styles.stageList}>
        {projects.map((project, index) => {
          const stageNumber = index + 1;
          const previousStage = stageNumber - 1;
          const nextStage = stageNumber + 1;
          const title = t(`projects.${project.id}.title`);

          return (
            <article
              className={styles.stageCard}
              id={`stage-${stageNumber}`}
              key={project.id}
            >
              <div className={styles.stageMeta}>
                <span>STAGE {String(stageNumber).padStart(2, "0")} / 08</span>
                <span className={styles.stageStatus}>
                  ● {statusLabels[index]}
                </span>
              </div>

              <div className={styles.stageMain}>
                <div className={styles.monitorColumn}>
                  <div className={styles.monitor}>
                    <div
                      className={`${styles.monitorScreen} ${screenColors[index]}`}
                    >
                      <Image
                        src={project.imgSrc}
                        alt={project.imgAlt}
                        fill
                        sizes="(max-width: 768px) 80vw, 240px"
                        className={styles.projectImage}
                      />
                      <span className={styles.scanlines} aria-hidden="true" />
                    </div>
                    <div className={styles.monitorControls} aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <span className={styles.hardwareLabel}>
                    &gt; HARDWARE: RETRO_TERMINAL_{String(stageNumber).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.stageInfo}>
                  <div>
                    <h3>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {title}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </h3>
                    <p>{t(`projects.${project.id}.description`)}</p>
                  </div>
                  <ul className={styles.technologyList} aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.stageFooter}>
                <div className={styles.stageNavigation}>
                  {previousStage > 0 ? (
                    <a href={`#stage-${previousStage}`}>▲ PREV</a>
                  ) : (
                    <span className={styles.disabledControl}>▲ PREV</span>
                  )}
                  {nextStage <= projects.length ? (
                    <a href={`#stage-${nextStage}`}>▼ NEXT</a>
                  ) : (
                    <span className={styles.disabledControl}>▼ END</span>
                  )}
                </div>
                <div className={styles.stageActions}>
                  <a
                    className={`${styles.actionButton} ${styles.missionButton}`}
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>A</span> PLAY MISSION
                  </a>
                  <a
                    className={`${styles.actionButton} ${styles.codeButton}`}
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>B</span> CODE ↗
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default StageList;
