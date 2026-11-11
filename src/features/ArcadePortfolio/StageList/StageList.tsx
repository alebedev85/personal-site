"use client";

import { projects } from "../../../data/projects";
import StageCard from "../StageCard/StageCard";
import styles from "./StageList.module.scss";

// Подпись состояния каждой карточки; индекс соответствует порядку проекта в списке.
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

// Цветовые акценты карточек (статус и hover-рамка), в том же порядке, что и проекты.
const stageAccents = [
  "accentRed",
  "accentGreen",
  "accentOrange",
  "accentRed",
  "accentPurple",
  "accentOrange",
  "accentGreen",
  "accentCyan",
] as const;

const StageList = () => (
  <section className="arcadeSection" id="stages">
    <div className="arcadeSectionHeader">
      <div className="arcadeSectionHeading">
        <span className="arcadeSectionMarker arcadeMarkerRed" />
        <h2>GAMES LIST / STAGES</h2>
      </div>
      <span className="arcadeStatusBadge arcadeStatusCyan">
        {projects.length} STAGES AVAILABLE
      </span>
    </div>

    <div className={styles.stageList}>
      {projects.map((project, index) => (
        <StageCard
          key={project.id}
          project={project}
          // Нумерация карточек начинается с 1, а навигация использует число проектов.
          stageNumber={index + 1}
          totalStages={projects.length}
          statusLabel={statusLabels[index]}
          stageAccent={stageAccents[index]}
        />
      ))}
    </div>
  </section>
);

export default StageList;
