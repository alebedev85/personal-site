import styles from './Skills.module.scss';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiSass,
  SiVite,
  SiWebpack,
  SiNextdotjs,
} from 'react-icons/si';

const skills = [
  {
    label: 'HTML',
    icon: <FaHtml5 />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    icon: <FaCss3Alt />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'JavaScript',
    icon: <FaJs />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    icon: <FaReact />,
    link: 'https://reactjs.org/',
  },
  {
    label: 'Redux',
    icon: <SiRedux />,
    link: 'https://redux.js.org/',
  },
  {
    label: 'SCSS',
    icon: <SiSass />,
    link: 'https://sass-lang.com/',
  },
  {
    label: 'Vite',
    icon: <SiVite />,
    link: 'https://vitejs.dev/',
  },
  {
    label: 'Webpack',
    icon: <SiWebpack />,
    link: 'https://webpack.js.org/',
  },
  {
    label: 'Git',
    icon: <FaGitAlt />,
    link: 'https://git-scm.com/',
  },
  {
    label: 'Node.js',
    icon: <FaNodeJs />,
    link: 'https://nodejs.org/',
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs />,
    link: 'https://nextjs.org/',
  },
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>Навыки:</h2>
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

export default Skills;
