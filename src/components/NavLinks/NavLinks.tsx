import styles from "./NavLinks.module.scss";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
];

const NavLinks = () => {
  return (
    <nav className={`${styles.nav}`} aria-label="In-page jump links">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
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
