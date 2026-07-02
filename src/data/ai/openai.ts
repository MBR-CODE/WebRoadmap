import type { Technology } from "../../types/Technology";
import { FaRobot } from "react-icons/fa";

const openai: Technology = {
  id: "openai",

  name: "OpenAI API",

  category: "AI Platform",

  icon: FaRobot,

  color: "#412991",

  description:
    "OpenAI provides APIs for powerful language, vision, speech and reasoning models.",

  why:
    "It enables developers to integrate advanced AI capabilities into applications with minimal setup.",

  difficulty: "Intermediate",

  prerequisites: [
    "Python",
    "JavaScript",
    "API Basics"
  ],

  beginner: [
    "API Keys",
    "Responses API",
    "Text Generation"
  ],

  intermediate: [
    "Structured Outputs",
    "Streaming",
    "Function Calling",
    "Vision"
  ],

  advanced: [
    "Agents",
    "RAG",
    "Production Deployment"
  ],

  tools: [
    "OpenAI SDK",
    "OpenAI Playground",
    "Python SDK",
    "Node SDK"
  ],

  projects: {
    beginner: [
      "AI Chatbot"
    ],

    intermediate: [
      "Document Assistant"
    ],

    advanced: [
      "AI SaaS Platform"
    ]
  },

  next: [
    "LangChain"
  ],

  careers: [
    "AI Engineer",
    "Software Engineer"
  ],

  resources: [
    {
      title: "OpenAI API Documentation",
      url: "https://platform.openai.com/docs"
    }
  ]
};

export default openai;