"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import styles from "./ArcadeSidebar.module.scss";

type ArcadeSidebarProps = {
  activeSection: string;
};

const navigation = [
  { href: "#bio", id: "bio", label: "[ START PORTFOLIO ]" },
  { href: "#skills", id: "skills", label: "[ POWER-UPS & SKILLS ]" },
  { href: "#stages", id: "stages", label: "[ STAGES / PROJECTS ]" },
  { href: "#contact", id: "contact", label: "[ CONTACTS ]" },
];

const ArcadeSidebar = ({ activeSection }: ArcadeSidebarProps) => {
  const theme = useSelector((state: RootState) => state.toggles.theme);
  const { t } = useTranslation();
  const playerNumber = theme === "dark" ? "1" : "2";
  const [firstName, ...lastName] = t("hero.name").split(" ");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.cabinet}>
        <div className={styles.cabinetMeta}>
          <span>★ PLAYER {playerNumber} CABINET ★</span>
          <span className={styles.credits}>CREDITS: 09</span>
        </div>

        <div className={styles.logo}>
          <span className={styles.engineBadge}>NEWBEEREN ENGINE V2.0</span>
          <h1 className={styles.arcadeTitle}>
            {firstName}
            <span>{lastName.join(" ")}</span>
          </h1>
          <span className={styles.role}>[ FRONTEND DEVELOPER ]</span>
        </div>

        <div className={styles.tagline}>
          <p>{t("hero.description")}</p>
        </div>

        <nav className={styles.arcadeNav} aria-label={t("nav.ariaLabel")}>
          <div className={styles.navHeading}>&gt; STAGE SELECTOR MENU:</div>
          {navigation.map(({ href, id, label }, index) => (
            <a
              key={id}
              href={href}
              className={`${styles.navTab} ${
                activeSection === id ? styles.navTabActive : ""
              }`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              <span className={styles.navLabel}>
                <span
                  className={`${styles.navArrow} ${
                    activeSection === id ? "arcadeBlink" : ""
                  }`}
                >
                  ▶
                </span>
                {label}
              </span>
              <span className={styles.navNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>

        <div className={styles.gridHorizon} aria-hidden="true">
          <div className={styles.gridPlane} />
          <div className={styles.gridFade} />
        </div>
      </div>
    </aside>
  );
};

export default ArcadeSidebar;
