export interface HeroStat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: "email" | "github" | "linkedin";
  external: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  tagline: string;
  bio: string[];
  email: string;
  stats: HeroStat[];
  socials: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  glyph: ProjectGlyph;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export type ProjectGlyph = "chart" | "shield" | "nodes" | "terminal" | "activity" | "box";

export interface Experience {
  period: string;
  kind: "Education" | "Experience";
  title: string;
  org: string;
  description: string;
}

export type skillLevel = "beginner" | "intermediate" | "advanced";

export type IconName =
  | "atom"
  | "file-code"
  | "layers"
  | "palette"
  | "triangle"
  | "flame"
  | "hexagon"
  | "database"
  | "share-2"
  | "zap"
  | "braces"
  | "layers-3"
  | "container"
  | "git-branch"
  | "cloud"
  | "git-merge"
  | "boxes"
  | "figma"
  | "monitor"
  | "server"
  | "wrench";

export interface Skills {
  name: string;
  icon: string;
  level: skillLevel;
}

export interface SkillCategory {
  name: string;
  icon: IconName;
  skills: Skills[];
}
