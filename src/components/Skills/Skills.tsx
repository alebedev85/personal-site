import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";
import styles from "./Skills.module.scss";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className={styles.skills}>
      <h2>{t("about.title")}</h2>
      <ul className={styles.skillList}>
        {skills.map(({ label, icon, link }) => (
          <li key={label} className={styles.skillItem}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={`${label} (откроется в новой вкладке)`}
              className={styles.link}
            >
              <div className={styles.icon}>{icon}</div>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
