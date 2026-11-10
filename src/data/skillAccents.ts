export const skillAccentColors: Record<string, string> = {
  HTML: "var(--arcade-red)",
  CSS: "#60a5fa",
  JavaScript: "var(--arcade-yellow)",
  TypeScript: "#60a5fa",
  React: "#22d3ee",
  Redux: "#c084fc",
  "Next.js": "#d1d5db",
  SCSS: "#f472b6",
  Vite: "#818cf8",
  "Node.js": "#34d399",
  Webpack: "#38bdf8",
  Git: "#fb923c",
};

export const getSkillAccentColor = (technology: string) => {
  if (technology.toLowerCase().includes("redux")) {
    return skillAccentColors.Redux;
  }

  if (technology.toLowerCase().includes("scss")) {
    return skillAccentColors.SCSS;
  }

  const skill = Object.keys(skillAccentColors).find(
    (label) => label.toLowerCase() === technology.toLowerCase(),
  );

  return skill ? skillAccentColors[skill] : undefined;
};
