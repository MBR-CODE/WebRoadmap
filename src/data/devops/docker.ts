import type { Technology } from "../../types/Technology";
import { FaDocker } from "react-icons/fa";

const docker: Technology = {
  id: "docker",

  name: "Docker",

  category: "Containerization",

  icon: FaDocker,

  color: "#2496ED",

  description:
    "Docker packages applications and their dependencies into portable containers.",

  why:
    "Containers ensure applications run consistently across development, testing, and production environments.",

  difficulty: "Intermediate",

  prerequisites: [
    "Linux Basics",
    "Backend Development"
  ],

  beginner: [
    "Images",
    "Containers",
    "Docker Hub",
    "Docker CLI"
  ],

  intermediate: [
    "Volumes",
    "Networks",
    "Docker Compose",
    "Environment Variables"
  ],

  advanced: [
    "Multi-stage Builds",
    "Optimization",
    "Docker Swarm",
    "Production Deployment"
  ],

  tools: [
    "Docker Desktop",
    "Docker Hub",
    "Docker Compose"
  ],

  projects: {
    beginner: [
      "Containerize a Node.js API"
    ],

    intermediate: [
      "MERN Stack with Docker Compose"
    ],

    advanced: [
      "Production Multi-container Application"
    ]
  },

  next: [
    "Kubernetes",
    "AWS"
  ],

  careers: [
    "DevOps Engineer",
    "Backend Developer",
    "Cloud Engineer"
  ],

  resources: [
    {
      title: "Docker Documentation",
      url: "https://docs.docker.com/"
    }
  ]
};

export default docker;