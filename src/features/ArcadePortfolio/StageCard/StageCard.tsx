"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { getSkillAccentColor } from "../../../data/skillAccents";
import type { projects } from "../../../data/projects";
import ControllerActions from "../ui/ControllerActions";
import styles from "./StageCard.module.scss";

type StageProject = (typeof projects)[number];
type ScreenColor =
  | "screenGreen"
  | "screenCyan"
  | "screenYellow"
  | "screenRed"
  | "screenPurple";
type StageAccent =
  | "accentGreen"
  | "accentCyan"
  | "accentRed"
  | "accentPurple"
  | "accentOrange";

interface StageCardProps {
  project: StageProject;
  stageNumber: number;
  totalStages: number;
  statusLabel: string;
  screenColor: ScreenColor;
  stageAccent: StageAccent;
}

const StageCard = ({
  project,
  stageNumber,
  totalStages,
  statusLabel,
  screenColor,
  stageAccent,
}: StageCardProps) => {
  const { t } = useTranslation();
  const previousStage = stageNumber - 1;
  const nextStage = stageNumber + 1;

  return (
    <article
      className={`${styles.stageCard} ${styles[stageAccent]}`}
      id={`stage-${stageNumber}`}
    >
      <div className={styles.stageMeta}>
        <span>STAGE {String(stageNumber).padStart(2, "0")} / 08</span>
        <span className={styles.stageStatus}>
          <FaCircle className={styles.statusDot} /> {statusLabel}
        </span>
      </div>

      <div className={styles.stageMain}>
        <div className={styles.monitorColumn}>
          <div className={styles.monitor}>
            <div className={`${styles.monitorScreen} ${styles[screenColor]}`}>
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
            <h3>{t(`projects.${project.id}.title`)}</h3>
            <p>{t(`projects.${project.id}.description`)}</p>
          </div>
          <ul className={styles.technologyList} aria-label="Technologies">
            {project.technologies.map((technology) => {
              const accentColor = getSkillAccentColor(technology);

              return (
                <li
                  key={technology}
                  style={
                    accentColor
                      ? { borderColor: accentColor, color: accentColor }
                      : undefined
                  }
                >
                  {technology}
                </li>
              );
            })}
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
          {nextStage <= totalStages ? (
            <a href={`#stage-${nextStage}`}>▼ NEXT</a>
          ) : (
            <span className={styles.disabledControl}>▼ END</span>
          )}
        </div>
        <ControllerActions
          className={styles.stageActions}
          actions={[
            {
              value: "A",
              label: "PLAY MISSION",
              ariaLabel: "Открыть проект",
              variant: "red",
              href: project.projectLink,
            },
            {
              value: "B",
              label: "CODE",
              ariaLabel: "Открыть исходный код",
              variant: "yellow",
              href: project.gitHubLink,
            },
          ]}
        />
      </div>
    </article>
  );
};

export default StageCard;
