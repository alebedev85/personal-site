"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { projects } from "../../../data/projects";
import "./StageList.scss";

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
];

const StageList = () => {
  const { t } = useTranslation();

  return (
    <section className={"section"} id="stages">
      <div className={"sectionHeader"}>
        <div className={"sectionHeading"}>
          <span className={`${"sectionMarker"} ${"markerCyan"}`} />
          <h2>СПИСОК ИГР / STAGES</h2>
        </div>
        <span className={`${"statusBadge"} ${"statusCyan"}`}>
          {projects.length} STAGES AVAILABLE
        </span>
      </div>

      <div className={"stageList"}>
        {projects.map((project, index) => {
          const stageNumber = index + 1;
          const previousStage = stageNumber - 1;
          const nextStage = stageNumber + 1;
          const title = t(`projects.${project.id}.title`);

          return (
            <article
              className={"stageCard"}
              id={`stage-${stageNumber}`}
              key={project.id}
            >
              <div className={"stageMeta"}>
                <span>STAGE {String(stageNumber).padStart(2, "0")} / 08</span>
                <span className={"stageStatus"}>
                  ● {statusLabels[index]}
                </span>
              </div>

              <div className={"stageMain"}>
                <div className={"monitorColumn"}>
                  <div className={"monitor"}>
                    <div
                      className={`${"monitorScreen"} ${screenColors[index]}`}
                    >
                      <Image
                        src={project.imgSrc}
                        alt={project.imgAlt}
                        fill
                        sizes="(max-width: 768px) 80vw, 240px"
                        className={"projectImage"}
                      />
                      <span className={"scanlines"} aria-hidden="true" />
                    </div>
                    <div className={"monitorControls"} aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <span className={"hardwareLabel"}>
                    &gt; HARDWARE: RETRO_TERMINAL_{String(stageNumber).padStart(2, "0")}
                  </span>
                </div>

                <div className={"stageInfo"}>
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
                  <ul className={"technologyList"} aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={"stageFooter"}>
                <div className={"stageNavigation"}>
                  {previousStage > 0 ? (
                    <a href={`#stage-${previousStage}`}>▲ PREV</a>
                  ) : (
                    <span className={"disabledControl"}>▲ PREV</span>
                  )}
                  {nextStage <= projects.length ? (
                    <a href={`#stage-${nextStage}`}>▼ NEXT</a>
                  ) : (
                    <span className={"disabledControl"}>▼ END</span>
                  )}
                </div>
                <div className={"stageActions"}>
                  <a
                    className={`${"actionButton"} ${"missionButton"}`}
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>A</span> PLAY MISSION
                  </a>
                  <a
                    className={`${"actionButton"} ${"codeButton"}`}
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
