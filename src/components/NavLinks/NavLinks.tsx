import { useTranslation } from "react-i18next";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./NavLinks.module.scss";

const linksKeys = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#projects", labelKey: "nav.projects" },
];

const sectionIds = linksKeys.map((link) => link.href.replace("#", ""));

const NavLinks = () => {
  const { t } = useTranslation();
  const { activeId, setActiveManually } = useActiveSection(sectionIds);

  const handleClick = (href: string) => {
    setActiveManually(href);
  };

  return (
    <nav className={styles.nav} aria-label={t("nav.ariaLabel")}>
      <ul>
        {linksKeys.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`${styles.link} ${
                activeId === link.href ? styles.active : ""
              }`}
            >
              <span className={styles.indicator} />
              <span className={styles.text}>{t(link.labelKey)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
