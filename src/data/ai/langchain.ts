import type { Technology } from "../../types/Technology";
import { SiLangchain } from "react-icons/si";

const langchain: Technology = {
  id: "langchain",

  name: "LangChain",

  category: "LLM Framework",

  icon: SiLangchain,

  color: "#1C3C3C",

  description:
    "LangChain is a framework for building applications powered by Large Language Models (LLMs).",

  why:
    "It simplifies working with prompts, tools, memory, agents and retrieval systems.",

  difficulty: "Advanced",

  prerequisites: [
    "Python",
    "FastAPI",
    "LLM Basics"
  ],

  beginner: [
    "Prompts",
    "Chat Models",
    "Output Parsers"
  ],

  intermediate: [
    "Chains",
    "Memory",
    "Document Loaders",
    "Embeddings"
  ],

  advanced: [
    "Agents",
    "Tools",
    "RAG",
    "Multi-Agent Systems"
  ],

  tools: [
    "LangChain",
    "LangSmith",
    "ChromaDB"
  ],

  projects: {
    beginner: [
      "Chatbot"
    ],

    intermediate: [
      "PDF Chat"
    ],

    advanced: [
      "AI Assistant",
      "RAG Application"
    ]
  },

  next: [
    "OpenAI",
    "Ollama"
  ],

  careers: [
    "AI Engineer",
    "LLM Engineer"
  ],

  resources: [
    {
      title: "LangChain Documentation",
      url: "https://python.langchain.com/docs/"
    }
  ]
};

export default langchain;