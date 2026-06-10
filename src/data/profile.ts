import type { Profile } from "@/src/types";

export const profile: Profile = {
  name: "Mouad CHARADI",
  initials: "MC",
  firstName: "Mouad",
  lastName: "CHARADI",
  role: "Fullstack Developer",
  location: "Morocco, Marakesh",
  tagline:
    "From database schema to design system, I ship products that stay fast, observable, and maintainable as the team and the traffic grow.",
  bio: [
    "I work at the seam between solid backend systems and interfaces that feel effortless — and I care a lot about the unglamorous parts in between.",
    "I've spent the last eight years shipping products at startups and scale-ups, most recently leading the platform team at a fintech where reliability is non-negotiable. I like observability, migrations that don't wake anyone at 3 am, and design systems that let a team move fast without drifting.",
    "When I'm not writing code, I maintain a handful of open-source tools and mentor early-career engineers. I believe the best software is calm, legible, and honest about its limits.",
  ],
  email: "mouadcharadi021@gmail.com",
  stats: [
    { value: "8 yrs", label: "Building for the web" },
    { value: "30+", label: "Products shipped" },
    { value: "12k", label: "GitHub stars" },
  ],
  socials: [
    {
      label: "Email",
      value: "mouadcharadi021@gmail.com",
      href: "mailto:mouadcharadi021@gmail.com",
      icon: "email",
      external: false,
    },
    {
      label: "GitHub",
      value: "github.com/MCH-Mouad",
      href: "https://github.com/MCH-Mouad",
      icon: "github",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "in/Mouad",
      href: "https://linkedin.com/in/Mouad",
      icon: "linkedin",
      external: true,
    },
  ],
};
