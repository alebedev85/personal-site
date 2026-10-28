"use client";

import { useTranslation } from "react-i18next";
import { skills } from "../../../data/skills";
import common from "../ArcadePortfolio.module.scss";
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

const SkillInventory = () => {
  const { t } = useTranslation();

  return (
    <section className={common.section} id="skills">
      <div className={common.sectionHeader}>
        <div className={common.sectionHeading}>
          <span className={`${common.sectionMarker} ${common.markerYellow}`} />
          <h2>POWER-UPS &amp; SKILLS</h2>
        </div>
        <span className={`${common.statusBadge} ${common.statusYellow}`}>
          12 / 12 SLOTS EQUIPPED
        </span>
      </div>

      <div className={common.panel}>
        <div className={common.panelStatus}>
          <span>&gt; SELECT WEAPON / TECH INVENTORY</span>
          <span>SLOTS: 12 LOCKED &amp; LOADED</span>
        </div>

        <div className={styles.skillGrid}>
          {skills.map(({ label, icon, link }, index) => (
            <a
              className={styles.skillCard}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={label}
              aria-label={`${label} — ${descriptions[label]}`}
            >
              <div className={styles.skillTopline}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.skillIcon}>{icon}</span>
              </div>
              <strong>{label === "HTML" ? "HTML5" : label === "CSS" ? "CSS3" : label}</strong>
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
            <a href="#stages" className={`${styles.controlButton} ${styles.buttonRed}`}>
              A
            </a>
            <span>EXEC</span>
            <a href="#bio" className={`${styles.controlButton} ${styles.buttonYellow}`}>
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
