export type ThemeType = "light" | "dark";
export type LanguageType = "ru" | "en";

export interface IProject {
  title: string;
  description: string;
  projectLink: string;
  gitHubLink: string;
  technologies: string[];
  imgSrc: string;
  imgAlt: string;
}