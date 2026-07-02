import type { Technology } from "../../types/Technology";
import { SiOllama } from "react-icons/si";

const ollama: Technology = {
  id: "ollama",

  name: "Ollama",

  category: "Local LLM Runtime",

  icon: SiOllama,

  color: "#000000",

  description:
    "Ollama allows you to run large language models locally on your own computer.",

  why:
    "It provides privacy, offline access and an easy way to experiment with open-source AI models.",

  difficulty: "Intermediate",

  prerequisites: [
    "Python",
    "LLM Basics"
  ],

  beginner: [
    "Installation",
    "Running Models",
    "CLI Commands"
  ],

  intermediate: [
    "REST API",
    "Model Management",
    "Embeddings"
  ],

  advanced: [
    "Custom Models",
    "Fine-Tuning Workflow",
    "Production Integration"
  ],

  tools: [
    "Ollama CLI",
    "Docker"
  ],

  projects: {
    beginner: [
      "Local Chatbot"
    ],

    intermediate: [
      "Offline AI Assistant"
    ],

    advanced: [
      "Private Enterprise AI"
    ]
  },

  next: [
    "LangChain"
  ],

  careers: [
    "AI Engineer",
    "ML Engineer"
  ],

  resources: [
    {
      title: "Ollama Documentation",
      url: "https://ollama.com"
    }
  ]
};

export default ollama;