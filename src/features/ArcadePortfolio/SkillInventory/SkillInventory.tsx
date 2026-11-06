"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { skills } from "../../../data/skills";
import styles from "./SkillInventory.module.scss";

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

        <div className={styles.skillGrid}>
          {skills.map(({ label, imageSrc, link }, index) => (
            <a
              className={`${styles.skillCard} ${skillAccentClasses[label]}`}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={label}
              aria-label={`${label} — ${descriptions[label]}`}
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
            <div className={styles.dpad} aria-hidden="true">
              <span />
            </div>
            <div>
              <strong>D-PAD CONTROLLER</strong>
              <span>STATUS: CONNECTED (PORT 1)</span>
            </div>
          </div>
          <div className={styles.controllerActions}>
            <a
              href="#stages"
              className={`${styles.controlButton} ${styles.buttonRed}`}
            >
              A
            </a>
            <span>EXEC</span>
            <a
              href="#bio"
              className={`${styles.controlButton} ${styles.buttonYellow}`}
            >
              B
            </a>
            <span>INFO</span>
          </div>
        </div>
      </div>
      <span className={styles.visuallyHidden}>{t("skills.title")}</span>
    </section>
  );
};

export default SkillInventory;
