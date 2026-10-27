"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import "./ArcadeSidebar.scss";

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
    <aside className={"sidebar"}>
      <div className={"cabinet"}>
        <div className={"cabinetMeta"}>
          <span>★ PLAYER {playerNumber} CABINET ★</span>
          <span className={"credits"}>CREDITS: 09</span>
        </div>

        <div className={"logo"}>
          <span className={"engineBadge"}>NEWBEEREN ENGINE V2.0</span>
          <h1 className={"arcadeTitle"}>
            {firstName}
            <span>{lastName.join(" ")}</span>
          </h1>
          <span className={"role"}>[ FRONTEND DEVELOPER ]</span>
        </div>

        <div className={"tagline"}>
          <p>{t("hero.description")}</p>
        </div>

        <nav className={"arcadeNav"} aria-label={t("nav.ariaLabel")}>
          <div className={"navHeading"}>&gt; STAGE SELECTOR MENU:</div>
          {navigation.map(({ href, id, label }, index) => (
            <a
              key={id}
              href={href}
              className={`${"navTab"} ${
                activeSection === id ? "navTabActive" : ""
              }`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              <span className={"navLabel"}>
                <span
                  className={`${"navArrow"} ${
                    activeSection === id ? "blink" : ""
                  }`}
                >
                  ▶
                </span>
                {label}
              </span>
              <span className={"navNumber"}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>

        <div className={"gridHorizon"} aria-hidden="true">
          <div className={"gridPlane"} />
          <div className={"gridFade"} />
        </div>
      </div>
    </aside>
  );
};

export default ArcadeSidebar;
