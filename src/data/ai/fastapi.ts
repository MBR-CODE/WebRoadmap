import type { Technology } from "../../types/Technology";
import { SiFastapi } from "react-icons/si";

const fastapi: Technology = {
  id: "fastapi",

  name: "FastAPI",

  category: "Python Backend",

  icon: SiFastapi,

  color: "#009688",

  description:
    "FastAPI is a modern Python framework for building high-performance APIs with automatic documentation.",

  why:
    "It is one of the most popular frameworks for AI backends because of its speed and excellent developer experience.",

  difficulty: "Intermediate",

  prerequisites: [
    "Python"
  ],

  beginner: [
    "Routes",
    "Path Parameters",
    "Query Parameters"
  ],

  intermediate: [
    "Pydantic",
    "Dependency Injection",
    "Authentication"
  ],

  advanced: [
    "Async APIs",
    "WebSockets",
    "Background Tasks"
  ],

  tools: [
    "FastAPI",
    "Uvicorn",
    "Swagger UI"
  ],

  projects: {
    beginner: [
      "Todo API"
    ],

    intermediate: [
      "Authentication API"
    ],

    advanced: [
      "LLM Backend"
    ]
  },

  next: [
    "LangChain"
  ],

  careers: [
    "Backend Developer",
    "AI Engineer"
  ],

  resources: [
    {
      title: "FastAPI Documentation",
      url: "https://fastapi.tiangolo.com/"
    }
  ]
};

export default fastapi;