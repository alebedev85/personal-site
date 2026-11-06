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
  imageSrc: string;
  link: string;
}

export const skills: ISkill[] = [
  {
    label: "HTML",
    icon: <FaHtml5 />,
    imageSrc: "/assets/arcade/icons/HTML.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    icon: <FaCss3Alt />,
    imageSrc: "/assets/arcade/icons/CSS.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "JavaScript",
    icon: <FaJs />,
    imageSrc: "/assets/arcade/icons/JavaScript.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    icon: <SiTypescript />,
    imageSrc: "/assets/arcade/icons/TypeScript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    icon: <FaReact />,
    imageSrc: "/assets/arcade/icons/React.png",
    link: "https://reactjs.org/",
  },
  {
    label: "Redux",
    icon: <SiRedux />,
    imageSrc: "/assets/arcade/icons/Redux.png",
    link: "https://redux.js.org/",
  },
  {
    label: "SCSS",
    icon: <SiSass />,
    imageSrc: "/assets/arcade/icons/SCSS.png",
    link: "https://sass-lang.com/",
  },
  {
    label: "Vite",
    icon: <SiVite />,
    imageSrc: "/assets/arcade/icons/Vite.png",
    link: "https://vitejs.dev/",
  },
  {
    label: "Webpack",
    icon: <SiWebpack />,
    imageSrc: "/assets/arcade/icons/Webpack.png",
    link: "https://webpack.js.org/",
  },
  {
    label: "Git",
    icon: <FaGitAlt />,
    imageSrc: "/assets/arcade/icons/Git.png",
    link: "https://git-scm.com/",
  },
  {
    label: "Node.js",
    icon: <FaNodeJs />,
    imageSrc: "/assets/arcade/icons/Node.js.png",
    link: "https://nodejs.org/",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs />,
    imageSrc: "/assets/arcade/icons/Next.js.png",
    link: "https://nextjs.org/",
  },
];
