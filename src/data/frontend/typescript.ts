import type { Technology } from "../../types/Technology";
import { SiTypescript } from "react-icons/si";

const typescript: Technology = {
  id: "typescript",

  name: "TypeScript",

  category: "Programming Language",

  icon: SiTypescript,

  color: "#3178C6",

  description:
    "TypeScript is JavaScript with static types that make applications easier to build and maintain.",

  why:
    "Most modern React, Angular and enterprise applications use TypeScript because it catches bugs before your code runs.",

  difficulty: "Intermediate",

  prerequisites: [
    "JavaScript"
  ],

  beginner: [
    "Primitive Types",
    "Arrays",
    "Objects",
    "Functions",
    "Interfaces"
  ],

  intermediate: [
    "Type Aliases",
    "Enums",
    "Generics",
    "Modules",
    "Classes"
  ],

  advanced: [
    "Utility Types",
    "Mapped Types",
    "Conditional Types",
    "Type Narrowing"
  ],

  tools: [
    "VS Code",
    "TypeScript Compiler",
    "ESLint"
  ],

  projects: {
    beginner: [
      "Convert a JavaScript Project"
    ],
    intermediate: [
      "React Dashboard",
      "REST API"
    ],
    advanced: [
      "Large Enterprise Application"
    ]
  },

  next: [
    "React",
    "Next.js",
    "NestJS"
  ],

  careers: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "TypeScript Documentation",
      url: "https://www.typescriptlang.org/docs/"
    }
  ]
};

export default typescript;