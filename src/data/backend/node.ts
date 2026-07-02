import type { Technology } from "../../types/Technology";
import { FaNodeJs } from "react-icons/fa";

const node: Technology = {
  id: "nodejs",

  name: "Node.js",

  category: "JavaScript Runtime",

  icon: FaNodeJs,

  color: "#339933",

  description:
    "Node.js is a JavaScript runtime that allows developers to build servers, APIs and backend applications using JavaScript.",

  why:
    "It lets frontend developers use JavaScript on both the client and the server, making full-stack development easier.",

  difficulty: "Beginner",

  prerequisites: [
    "JavaScript"
  ],

  beginner: [
    "Node Installation",
    "npm",
    "pnpm",
    "Modules",
    "Package.json",
    "File System",
    "Path Module"
  ],

  intermediate: [
    "HTTP Module",
    "Events",
    "Streams",
    "Environment Variables",
    "Async Programming"
  ],

  advanced: [
    "Clusters",
    "Worker Threads",
    "Performance",
    "Process Management"
  ],

  tools: [
    "Node.js",
    "npm",
    "pnpm",
    "Nodemon"
  ],

  projects: {
    beginner: [
      "CLI Calculator",
      "Notes App"
    ],

    intermediate: [
      "REST API",
      "Authentication Server"
    ],

    advanced: [
      "Chat Server",
      "Microservice"
    ]
  },

  next: [
    "Express",
    "NestJS"
  ],

  careers: [
    "Backend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Node.js Documentation",
      url: "https://nodejs.org/docs/latest/api/"
    }
  ]
};

export default node;