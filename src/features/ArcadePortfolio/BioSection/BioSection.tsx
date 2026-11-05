"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Image from "next/image";
import type { RootState } from "../../../store";
import { FaHeart } from "react-icons/fa"
import styles from "./BioSection.module.scss";

const BioSection = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.toggles.theme);
  const playerNumber = theme === "dark" ? "1" : "2";

  return (
    <section className="arcadeSection" id="bio">
      <div className="arcadeSectionHeader">
        <div className="arcadeSectionHeading">
          <span className="arcadeSectionMarker arcadeMarkerRed" />
          <h2>PLAYER {playerNumber} : BIO_DATA.TXT</h2>
        </div>
        <span className="arcadeStatusBadge arcadeStatusGreen">
          READY TO PLAY
        </span>
      </div>

      <div className="arcadePanel arcadePanelGold">
        <div className="arcadePanelStatus">
          <span>&gt; PROFILE: ANDREY LEBEDEV</span>
          <span className={styles.health}>
            HP: <span><FaHeart/> <FaHeart/> <FaHeart/></span>
          </span>
        </div>

        <div className={styles.bioIntro}>
          <div className={styles.avatar} aria-hidden="true">
            <Image
              src="/assets/arcade/myFoto.jpg"
              alt=""
              fill
              sizes="(max-width: 480px) 52px, 64px"
              className={styles.avatarImage}
            />
            <span>AL</span>
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
            <strong className={styles.specValue}>UI/UX CRAFTER</strong>
          </div>
          <div className={styles.spec}>
            <span>LOCATION:</span>
            <strong className={styles.specValue}>REMOTE / RU</strong>
          </div>
          <div className={styles.spec}>
            <span>ALIGNMENT:</span>
            <strong className={styles.specValue}>PIXEL CLEAN</strong>
          </div>
          <div className={styles.spec}>
            <span>EXP LEVEL:</span>
            <strong className={styles.specValue}>STARTUP VET</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
