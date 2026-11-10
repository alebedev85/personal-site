"use client";

import { projects } from "../../../data/projects";
import StageCard from "../StageCard/StageCard";
import styles from "./StageList.module.scss";

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
  "screenGreen",
  "screenCyan",
  "screenYellow",
  "screenRed",
  "screenPurple",
  "screenYellow",
  "screenCyan",
  "screenGreen",
] as const;

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
        <span className="arcadeSectionMarker arcadeMarkerCyan" />
        <h2>СПИСОК ИГР / STAGES</h2>
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
          stageNumber={index + 1}
          totalStages={projects.length}
          statusLabel={statusLabels[index]}
          screenColor={screenColors[index]}
          stageAccent={stageAccents[index]}
        />
      ))}
    </div>
  </section>
);

export default StageList;
