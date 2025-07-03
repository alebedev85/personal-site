export interface IProject {
  title: string;
  description: string;
  projectLink: string;
  gitHubLink: string;
  technologies: string[];
  imgSrc: string;
  imgAlt: string;
}

export const projects: IProject[] = [
  {
    title: "Календарь игор",
    description:
      "Интерактивное веб-приложение для расписания игр в формате календаря. Поддерживает drag & drop, добавление задач, загрузку изображений, просмотр и удаление задач, а также синхронизацию с Firebase.",
    projectLink: "https://alebedev85.github.io/the-wassermans-games/",
    gitHubLink: "https://github.com/alebedev85/the-wassermans-games",
    technologies: [
      "React",
      "Redux-toolkit",
      "dnd",
      "Firebase",
      "Cloudinary",
      "Vite",
    ],
    imgSrc: "/assets/images/the-wassermans-games.png",
    imgAlt: "the-wassermans-games",
  },
  {
    title: "Планировщик задач с Drag & Drop (мини-Trello)",
    description:
      "Это веб-приложение для управления задачами, где пользователи могут создавать, перемещать и изменять задачи между колонками (например, \"To Do\", \"In Progress\", \"Done\").",
    projectLink: "https://alebedev85.github.io/mytrello/",
    gitHubLink: "https://github.com/alebedev85/mytrello",
    technologies: [
      "React",
      "Redux-toolkit",
      "dnd",
      "Firebase",
      "Firebase-auth",
      "Vite",
    ],
    imgSrc: "/assets/images/myTrello.png",
    imgAlt: "myTrello",
  },
  {
    title: "Виртуальное пианино",
    description:
      "Интерактивное виртуальное пианино на три октавы с поддержкой управления с клавиатуры и мыши, а также визуализацией звучащих нот.",
    projectLink: "https://alebedev85.github.io/mypiano/",
    gitHubLink: "https://github.com/alebedev85/mypiano",
    technologies: [
      "React",
      "Redux-toolkit",
      "Tone.js",
      "FSD",
      "requestAnimationFrame",
    ],
    imgSrc: "/assets/images/myPiano.png",
    imgAlt: "mypiano",
  },
  {
    title: "Клуб четырех коней",
    description:
      "Одностраничный адаптивный сайт, сверстанный по дизайну из Figma. Вся логика написана на нативном JavaScript с применением принципов ООП и классов. Без использования сторонних библиотек и фреймворков.",
    projectLink: "https://alebedev85.github.io/fourhorsesclub/",
    gitHubLink: "https://github.com/alebedev85/fourhorsesclub",
    technologies: ["JavaScript", "html", "css", "Webpack", "ООП"],
    imgSrc: "/assets/images/fourhorsesclub.png",
    imgAlt: "fourhorsesclub",
  },
  {
    title: "Приложение для поиска пользователей GitHub",
    description:
      "Интерактивное приложение для поиска пользователей GitHub с использованием API GitHub",
    projectLink: "https://alebedev85.github.io/GitHubUserSearchApp/",
    gitHubLink: "https://github.com/alebedev85/GitHubUserSearchApp",
    technologies: ["React", "TypeScript", "GitHub API"],
    imgSrc: "/assets/images/GitHubUserSearchApp.png",
    imgAlt: "GitHubUserSearchApp",
  },
  {
    title: "Каталог стран",
    description:
      "Каталог стран, с возможностью фильтрации по региону и поиску по названию страны.",
    projectLink: "https://alebedev85.github.io/countries-api/",
    gitHubLink: "https://github.com/alebedev85/countries-api",
    technologies: ["React", "Redux-toolkit", "TypeScript"],
    imgSrc: "/assets/images/countries-api.png",
    imgAlt: "GitHubUserSearchApp",
  },
];
