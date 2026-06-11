import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    period: "2023 — Present",
    kind: "Experience",
    title: "Senior Software Engineer",
    org: "Northwind Labs",
    description:
      "Lead the platform team building the real-time data layer behind a fintech serving 200k businesses. Cut p99 latency by 60% and drove the migration from a monolith to event-driven services.",
  },
  {
    period: "2020 — 2023",
    kind: "Experience",
    title: "Fullstack Engineer",
    org: "Cobalt Systems",
    description:
      "Built customer-facing dashboards and the internal design system from scratch. Shipped the billing rewrite that now processes more than $40M a year without manual intervention.",
  },
  {
    period: "2018 — 2020",
    kind: "Experience",
    title: "Frontend Engineer",
    org: "Tidepool · early-stage",
    description:
      "First front-end hire. Took the product from prototype to 20k users and established the testing, accessibility, and CI culture the team still runs on.",
  },
  {
    period: "2014 — 2018",
    kind: "Education",
    title: "B.S. Computer Science",
    org: "University of Porto",
    description:
      "Graduated with honours, focusing on distributed systems and human–computer interaction. Led the student developer society and ran its first hackathon.",
  },
];
