"use client";

import { useTranslation } from "react-i18next";
import { skills } from "../../../data/skills";
import "./SkillInventory.scss";

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
    <section className={"section"} id="skills">
      <div className={"sectionHeader"}>
        <div className={"sectionHeading"}>
          <span className={`${"sectionMarker"} ${"markerYellow"}`} />
          <h2>POWER-UPS &amp; SKILLS</h2>
        </div>
        <span className={`${"statusBadge"} ${"statusYellow"}`}>
          12 / 12 SLOTS EQUIPPED
        </span>
      </div>

      <div className={"panel"}>
        <div className={"panelStatus"}>
          <span>&gt; SELECT WEAPON / TECH INVENTORY</span>
          <span>SLOTS: 12 LOCKED &amp; LOADED</span>
        </div>

        <div className={"skillGrid"}>
          {skills.map(({ label, icon, link }, index) => (
            <a
              className={"skillCard"}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={label}
              aria-label={`${label} — ${descriptions[label]}`}
            >
              <div className={"skillTopline"}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className={"skillIcon"}>{icon}</span>
              </div>
              <strong>{label === "HTML" ? "HTML5" : label === "CSS" ? "CSS3" : label}</strong>
              <span className={"skillDescription"}>
                {descriptions[label]}
              </span>
            </a>
          ))}
        </div>

        <div className={"controller"}>
          <div className={"controllerInfo"}>
            <div className={"dpad"} aria-hidden="true">
              <span />
            </div>
            <div>
              <strong>D-PAD CONTROLLER</strong>
              <span>STATUS: CONNECTED (PORT 1)</span>
            </div>
          </div>
          <div className={"controllerActions"}>
            <a href="#stages" className={`${"controlButton"} ${"buttonRed"}`}>
              A
            </a>
            <span>EXEC</span>
            <a href="#bio" className={`${"controlButton"} ${"buttonYellow"}`}>
              B
            </a>
            <span>INFO</span>
          </div>
        </div>
      </div>
      <span className={"visuallyHidden"}>{t("skills.title")}</span>
    </section>
  );
};

export default SkillInventory;
