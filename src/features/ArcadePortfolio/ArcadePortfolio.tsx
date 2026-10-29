"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./ArcadePortfolio.module.scss";
import BioSection from "./BioSection/BioSection";
import ContactSection from "./ContactSection/ContactSection";
import Header from "./Header/Header";
import SkillInventory from "./SkillInventory/SkillInventory";
import StageList from "./StageList/StageList";
import ArcadeSidebar from "./ArcadeSidebar/ArcadeSidebar";

const sectionIds = ["bio", "skills", "stages", "contact"];

const ArcadePortfolio = () => {
  const [score, setScore] = useState("000000");
  const [activeSection, setActiveSection] = useState("bio");
  const theme = useSelector((state: RootState) => state.toggles.theme);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
          : 0;
      setScore(String(Math.floor(progress * 999999)).padStart(6, "0"));

      const currentPosition = window.scrollY + 180;
      const currentSection = [...sectionIds]
        .reverse()
        .find((id) => {
          const element = document.getElementById(id);
          return element && element.offsetTop <= currentPosition;
        });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className={`${styles.page} page`} data-theme={theme}>
      <Header score={score} />
      <div className={styles.shell}>
        <div className={styles.columns}>
          <ArcadeSidebar activeSection={activeSection} />
          <main className={styles.mainContent}>
            <BioSection />
            <SkillInventory />
            <StageList />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ArcadePortfolio;
