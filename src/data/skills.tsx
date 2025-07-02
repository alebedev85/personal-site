import type { ReactElement } from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

export interface ISkill {
  label: string;
  icon: ReactElement;
  link: string;
}

export const skills: ISkill[] = [
  {
    label: "HTML",
    icon: <FaHtml5 />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    icon: <FaCss3Alt />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "JavaScript",
    icon: <FaJs />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    icon: <FaReact />,
    link: "https://reactjs.org/",
  },
  {
    label: "Redux",
    icon: <SiRedux />,
    link: "https://redux.js.org/",
  },
  {
    label: "SCSS",
    icon: <SiSass />,
    link: "https://sass-lang.com/",
  },
  {
    label: "Vite",
    icon: <SiVite />,
    link: "https://vitejs.dev/",
  },
  {
    label: "Webpack",
    icon: <SiWebpack />,
    link: "https://webpack.js.org/",
  },
  {
    label: "Git",
    icon: <FaGitAlt />,
    link: "https://git-scm.com/",
  },
  {
    label: "Node.js",
    icon: <FaNodeJs />,
    link: "https://nodejs.org/",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
  },
];
