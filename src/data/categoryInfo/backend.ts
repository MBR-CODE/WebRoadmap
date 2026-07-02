import type { CategoryInfo } from "../../types/CategoryInfo";

const backend: CategoryInfo = {
  id: "backend",

  title: "Backend Development",

  description:
    "Backend development is responsible for everything that happens behind the scenes. It processes requests, runs business logic, authenticates users and communicates with databases.",

  why:
    "Backend developers build the engine that powers every application. Without a backend, most modern websites couldn't store users, process payments or provide personalized experiences.",

  whatYouBuild: [
    "REST APIs",
    "Authentication Systems",
    "Payment Systems",
    "Chat Servers",
    "Business Applications",
    "Microservices",
    "Cloud APIs"
  ],

  usedBy: [
    "Amazon",
    "Uber",
    "Spotify",
    "Netflix",
    "Shopify",
    "GitHub"
  ],

  roadmap: [
    "Node.js",
    "Express",
    "Databases",
    "Authentication",
    "Docker",
    "Cloud"
  ],

  careers: [
    "Backend Developer",
    "API Developer",
    "Software Engineer",
    "Full Stack Developer"
  ],

  averageTime: {
    min: 6,
    max: 10,
    unit: "months"
  },

  difficulty: 3
};

export default backend;