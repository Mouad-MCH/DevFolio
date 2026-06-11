import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React", icon: "atom", level: "advanced" },
      { name: "TypeScript", icon: "file-code", level: "advanced" },
      { name: "Next.js", icon: "layers", level: "advanced" },
      { name: "CSS / Tailwind", icon: "palette", level: "advanced" },
      { name: "Vue", icon: "triangle", level: "intermediate" },
      { name: "Svelte", icon: "flame", level: "intermediate" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "hexagon", level: "advanced" },
      { name: "PostgreSQL", icon: "database", level: "advanced" },
      { name: "GraphQL", icon: "share-2", level: "advanced" },
      { name: "Go", icon: "zap", level: "intermediate" },
      { name: "Python", icon: "braces", level: "intermediate" },
      { name: "Redis", icon: "layers-3", level: "intermediate" },
    ],
  },
  {
    name: "Tools & Infra",
    icon: "wrench",
    skills: [
      { name: "Docker", icon: "container", level: "advanced" },
      { name: "Git", icon: "git-branch", level: "advanced" },
      { name: "AWS", icon: "cloud", level: "advanced" },
      { name: "CI/CD", icon: "git-merge", level: "advanced" },
      { name: "Kubernetes", icon: "boxes", level: "intermediate" },
      { name: "Figma", icon: "figma", level: "intermediate" },
    ],
  },
];
