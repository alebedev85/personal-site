"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { skills } from "../../../data/skills";
import styles from "./SkillInventory.module.scss";

type Direction = "left" | "right" | "up" | "down";

const descriptions: Record<string, string> = {
  HTML: "Semantic & A11y",
  CSS: "Responsive / FX",
  JavaScript: "ES6+ / Async",
  TypeScript: "Strong Typing",
  React: "Hooks / State",
  Redux: "Toolkit & Query",
  "Next.js": "App Router 14+",
  SCSS: "Modules & BEM",
  Vite: "Fast Bundler",
  "Node.js": "Backend Runtime",
  Webpack: "Custom Configs",
  Git: "Branching & CI",
};

const skillAccentClasses: Record<string, string> = {
  HTML: styles.skillAccentHtml,
  CSS: styles.skillAccentCss,
  JavaScript: styles.skillAccentJavaScript,
  TypeScript: styles.skillAccentTypeScript,
  React: styles.skillAccentReact,
  Redux: styles.skillAccentRedux,
  "Next.js": styles.skillAccentNext,
  SCSS: styles.skillAccentScss,
  Vite: styles.skillAccentVite,
  "Node.js": styles.skillAccentNode,
  Webpack: styles.skillAccentWebpack,
  Git: styles.skillAccentGit,
};

const SkillInventory = () => {
  const { t } = useTranslation();
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const [controllerActivated, setControllerActivated] = useState(false);
  const skillGridRef = useRef<HTMLDivElement>(null);
  const skillLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const moveSelection = (direction: Direction) => {
    setControllerActivated(true);
    const grid = skillGridRef.current;
    if (!grid) return;

    const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    const row = Math.floor(selectedSkillIndex / columns);
    const column = selectedSkillIndex % columns;
    let nextIndex = selectedSkillIndex;

    if (direction === "left" && column > 0) nextIndex -= 1;
    if (direction === "right" && column < columns - 1) nextIndex += 1;
    if (direction === "up" && row > 0) nextIndex -= columns;
    if (direction === "down" && selectedSkillIndex + columns < skills.length) {
      nextIndex += columns;
    }

    setSelectedSkillIndex(nextIndex);
  };

  const activateSelectedSkill = () => {
    skillLinkRefs.current[selectedSkillIndex]?.click();
  };

  return (
    <section className="arcadeSection" id="skills">
      <div className="arcadeSectionHeader">
        <div className="arcadeSectionHeading">
          <span className="arcadeSectionMarker arcadeMarkerYellow" />
          <h2>POWER-UPS &amp; SKILLS</h2>
        </div>
        <span className="arcadeStatusBadge arcadeStatusYellow">
          12 / 12 SLOTS EQUIPPED
        </span>
      </div>

      <div className="arcadePanel">
        <div className="arcadePanelStatus">
          <span>&gt; SELECT WEAPON / TECH INVENTORY</span>
          <span>SLOTS: 12 LOCKED &amp; LOADED</span>
        </div>

        <div className={styles.skillGrid} ref={skillGridRef}>
          {skills.map(({ label, imageSrc, link }, index) => (
            <a
              className={`${styles.skillCard} ${skillAccentClasses[label]} ${
                controllerActivated && selectedSkillIndex === index
                  ? styles.skillCardSelected
                  : ""
              }`}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={label}
              aria-label={`${label} — ${descriptions[label]}`}
              ref={(element) => {
                skillLinkRefs.current[index] = element;
              }}
              onFocus={() => {
                if (!controllerActivated) setSelectedSkillIndex(index);
              }}
              onMouseEnter={() => {
                if (!controllerActivated) setSelectedSkillIndex(index);
              }}
            >
              <div className={styles.skillTopline}>
                <span className={styles.skillIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.skillIcon}>
                  <Image src={imageSrc} alt="" width={30} height={30} />
                </span>
              </div>
              <strong>
                {label === "HTML" ? "HTML5" : label === "CSS" ? "CSS3" : label}
              </strong>
              <span className={styles.skillDescription}>
                {descriptions[label]}
              </span>
            </a>
          ))}
        </div>

        <div className={styles.controller}>
          <div className={styles.controllerInfo}>
            <div
              className={styles.dpad}
              role="group"
              aria-label="Навигация по навыкам"
            >
              <button
                type="button"
                aria-label="Вверх"
                onClick={() => moveSelection("up")}
              >
              </button>
              <button
                type="button"
                aria-label="Влево"
                onClick={() => moveSelection("left")}
              >
              </button>
              <button
                type="button"
                aria-label="Вправо"
                onClick={() => moveSelection("right")}
              >
              </button>
              <button
                type="button"
                aria-label="Вниз"
                onClick={() => moveSelection("down")}
              >
              </button>
              <span aria-hidden="true" />
            </div>
            <div>
              <strong>D-PAD CONTROLLER</strong>
              <span>STATUS: CONNECTED (PORT 1)</span>
            </div>
          </div>
          <div className={styles.controllerActions}>
            <button
              type="button"
              className={`${styles.controlButton} ${styles.buttonRed}`}
              aria-label="Открыть выбранный навык (A)"
              onClick={activateSelectedSkill}
            >
              A
            </button>
            <span>EXEC</span>
            <button
              type="button"
              className={`${styles.controlButton} ${styles.buttonYellow}`}
              aria-label="Открыть выбранный навык (B)"
              onClick={activateSelectedSkill}
            >
              B
            </button>
            <span>INFO</span>
          </div>
        </div>
      </div>
      <span className={styles.visuallyHidden}>{t("skills.title")}</span>
    </section>
  );
};

export default SkillInventory;
