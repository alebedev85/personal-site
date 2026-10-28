"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import common from "../ArcadePortfolio.module.scss";
import styles from "./BioSection.module.scss";

const BioSection = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.toggles.theme);
  const playerNumber = theme === "dark" ? "1" : "2";

  return (
    <section className={common.section} id="bio">
      <div className={common.sectionHeader}>
        <div className={common.sectionHeading}>
          <span className={`${common.sectionMarker} ${common.markerRed}`} />
          <h2>PLAYER {playerNumber} : BIO_DATA.TXT</h2>
        </div>
        <span className={`${common.statusBadge} ${common.statusGreen}`}>
          READY TO PLAY
        </span>
      </div>

      <div className={`${common.panel} ${common.panelGold}`}>
        <div className={common.panelStatus}>
          <span>&gt; PROFILE: ANDREY LEBEDEV</span>
          <span className={styles.health}>
            HP: <span>♥ ♥ ♥</span>
          </span>
        </div>

        <div className={styles.bioIntro}>
          <div className={styles.avatar} aria-hidden="true">
            <span>AL</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2h16v2H4V2zm2 4h12v2H6V6zm-2 4h16v8H4v-8zm4 2v4h2v-4H8zm6 0v4h2v-4h-2zm-8 8h12v2H6v-2z" />
            </svg>
          </div>
          <div className={styles.dialogue}>
            <strong>&gt; STATUS: JUNIOR+ / READY FOR QUEST</strong>
            <p>{t("hero.description")}</p>
          </div>
        </div>

        <div className={styles.bioCopy}>
          <p>
            {t("about.description.part1")}{" "}
            <a
              href="https://service.re-action.online"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("about.links.reaction.text")}
            </a>{" "}
            {t("about.description.part2")}{" "}
            <a
              href="https://wellcards.co"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("about.links.wellcards.text")}
            </a>{" "}
            {t("about.description.part3")}
          </p>
        </div>

        <div className={styles.specGrid}>
          <div className={styles.spec}>
            <span>CLASS:</span>
            <strong className={styles.specGreen}>UI/UX CRAFTER</strong>
          </div>
          <div className={styles.spec}>
            <span>LOCATION:</span>
            <strong className={styles.specYellow}>REMOTE / RU</strong>
          </div>
          <div className={styles.spec}>
            <span>ALIGNMENT:</span>
            <strong className={styles.specCyan}>PIXEL CLEAN</strong>
          </div>
          <div className={styles.spec}>
            <span>EXP LEVEL:</span>
            <strong className={styles.specRed}>STARTUP VET</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
