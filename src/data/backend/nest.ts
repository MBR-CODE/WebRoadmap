import type { Technology } from "../../types/Technology";
import { SiNestjs } from "react-icons/si";

const nest: Technology = {
  id: "nestjs",

  name: "NestJS",

  category: "Enterprise Backend Framework",

  icon: SiNestjs,

  color: "#E0234E",

  description:
    "NestJS is a TypeScript-first backend framework built for scalable and maintainable applications.",

  why:
    "It provides a structured architecture with dependency injection and enterprise-ready features.",

  difficulty: "Advanced",

  prerequisites: [
    "TypeScript",
    "Node.js",
    "Express"
  ],

  beginner: [
    "Nest CLI",
    "Modules",
    "Controllers",
    "Providers"
  ],

  intermediate: [
    "Dependency Injection",
    "Services",
    "Pipes",
    "Guards",
    "Validation"
  ],

  advanced: [
    "Interceptors",
    "Microservices",
    "GraphQL",
    "Testing",
    "CQRS"
  ],

  tools: [
    "Nest CLI",
    "Swagger",
    "Prisma",
    "TypeORM"
  ],

  projects: {
    beginner: [
      "Todo API"
    ],

    intermediate: [
      "Authentication API",
      "School Management System"
    ],

    advanced: [
      "Banking Backend",
      "Microservices Platform"
    ]
  },

  next: [
    "Docker",
    "Redis",
    "Kubernetes"
  ],

  careers: [
    "Backend Developer",
    "Software Engineer"
  ],

  resources: [
    {
      title: "NestJS Documentation",
      url: "https://docs.nestjs.com/"
    }
  ]
};

export default nest;