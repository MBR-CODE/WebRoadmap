import type { Technology } from "../../types/Technology";
import { SiNextdotjs } from "react-icons/si";

const next: Technology = {
  id: "nextjs",

  name: "Next.js",

  category: "React Framework",

  icon: SiNextdotjs,

  color: "#111111",

  description:
    "Next.js is a full-stack React framework for building fast, production-ready web applications.",

  why:
    "It provides routing, server rendering, API routes, and many performance optimizations out of the box.",

  difficulty: "Advanced",

  prerequisites: [
    "React",
    "JavaScript",
    "TypeScript"
  ],

  beginner: [
    "File-based Routing",
    "Layouts",
    "Pages",
    "Images"
  ],

  intermediate: [
    "App Router",
    "Server Components",
    "Client Components",
    "Data Fetching",
    "Metadata"
  ],

  advanced: [
    "Server Actions",
    "Authentication",
    "Caching",
    "Middleware",
    "Deployment"
  ],

  tools: [
    "Vercel",
    "Prisma",
    "NextAuth",
    "Drizzle ORM"
  ],

  projects: {
    beginner: [
      "Portfolio",
      "Blog"
    ],
    intermediate: [
      "Company Website",
      "Dashboard"
    ],
    advanced: [
      "SaaS Platform",
      "AI Application"
    ]
  },

  next: [
    "Docker",
    "AWS",
    "CI/CD"
  ],

  careers: [
    "Frontend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs"
    }
  ]
};

export default next;