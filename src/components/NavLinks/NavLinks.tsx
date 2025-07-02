import styles from "./NavLinks.module.scss";
import { useActiveSection } from "../../hooks/useActiveSection";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
];

const sectionIds = links.map(link => link.href.replace("#", ""));

const NavLinks = () => {
  const { activeId, setActiveManually } = useActiveSection(sectionIds);

  const handleClick = (href: string) => {
    setActiveManually(href);
  };

  return (
    <nav className={styles.nav} aria-label="In-page jump links">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`${styles.link} ${activeId === link.href ? styles.active : ""}`}
            >
              <span className={styles.indicator} />
              <span className={styles.text}>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
