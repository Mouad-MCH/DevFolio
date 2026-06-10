import { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "ledgerline",
    title: "Ledgerline",
    description:
      "A real-time financial dashboard handling 50k concurrent streams with sub-100 ms updates and zero-jank charts.",
    year: "2025",
    glyph: "chart",
    tags: ["TypeScript", "React", "WebSocket", "D3"],
    github: "https://github.com/kairenner/ledgerline",
    demo: "https://ledgerline.demo.dev",
    featured: true,
  },
  {
    id: "harborlight",
    title: "Harborlight",
    description:
      "A multi-tenant authentication platform with SSO, fine-grained RBAC, and audit logging that works out of the box.",
    year: "2024",
    glyph: "shield",
    tags: ["Node.js", "PostgreSQL", "Redis", "gRPC"],
    github: "https://github.com/kairenner/harborlight",
    demo: "https://harborlight.demo.dev",
    featured: true,
  },
  {
    id: "cartographer",
    title: "Cartographer",
    description:
      "A collaborative diagramming canvas with CRDT-backed real-time sync — hundreds of cursors, no merge conflicts.",
    year: "2024",
    glyph: "nodes",
    tags: ["React", "Canvas", "CRDT", "WebRTC"],
    github: "https://github.com/kairenner/cartographer",
    demo: "https://cartographer.demo.dev",
    featured: true,
  },
  {
    id: "driftwood",
    title: "Driftwood",
    description:
      "A fast CLI that spins up reproducible dev environments from a single manifest. Used by 4k developers daily.",
    year: "2023",
    glyph: "terminal",
    tags: ["Go", "Cobra", "Docker"],
    github: "https://github.com/kairenner/driftwood",
    demo: "https://driftwood.demo.dev",
  },
  {
    id: "pulsefeed",
    title: "Pulsefeed",
    description:
      "An event-streaming analytics pipeline ingesting 2M events a minute into columnar storage for instant queries.",
    year: "2023",
    glyph: "activity",
    tags: ["Kafka", "ClickHouse", "Python"],
    github: "https://github.com/kairenner/pulsefeed",
    demo: "https://pulsefeed.demo.dev",
  },
  {
    id: "verdant",
    title: "Verdant",
    description:
      "An accessible React component library and design-system toolkit — 60+ components, fully themeable, WCAG-AA.",
    year: "2022",
    glyph: "box",
    tags: ["React", "Storybook", "TypeScript"],
    github: "https://github.com/kairenner/verdant",
    demo: "https://verdant.demo.dev",
  },
];

export const featuredProject: Project[] = projects.filter((p) => p.featured);
