import type { CategoryInfo } from "../../types/CategoryInfo";

const ai: CategoryInfo = {
  id: "ai",

  title: "Artificial Intelligence",

  description:
    "Artificial Intelligence focuses on building software that can understand, reason, generate content and automate complex tasks.",

  why:
    "AI is transforming nearly every industry, creating huge demand for developers who can build intelligent applications.",

  whatYouBuild: [
    "AI Assistants",
    "Chatbots",
    "Recommendation Systems",
    "Automation Tools",
    "Document Analysis",
    "Vision Applications"
  ],

  usedBy: [
    "ChatGPT",
    "GitHub Copilot",
    "Perplexity",
    "Cursor",
    "Claude",
    "Gemini"
  ],

  roadmap: [
    "Python",
    "FastAPI",
    "OpenAI API",
    "LangChain",
    "Vector Databases",
    "RAG"
  ],

  careers: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Applied AI Engineer"
  ],

  averageTime: {
    min: 6,
    max: 12,
    unit: "months"
  },

  difficulty: 4
};

export default ai;