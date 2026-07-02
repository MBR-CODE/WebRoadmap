import type { Technology } from "../../types/Technology";
import { FaPython } from "react-icons/fa";

const python: Technology = {
  id: "python",

  name: "Python",

  category: "Programming Language",

  icon: FaPython,

  color: "#3776AB",

  description:
    "Python is the most popular programming language for artificial intelligence, machine learning, automation, and data science.",

  why:
    "Most AI frameworks, libraries and research are built around Python, making it the best starting point for AI development.",

  difficulty: "Beginner",

  prerequisites: [],

  beginner: [
    "Variables",
    "Functions",
    "Lists",
    "Loops",
    "Dictionaries",
    "Modules"
  ],

  intermediate: [
    "OOP",
    "Virtual Environments",
    "Packages",
    "File Handling"
  ],

  advanced: [
    "Concurrency",
    "Type Hints",
    "Performance",
    "Async Programming"
  ],

  tools: [
    "Python",
    "VS Code",
    "PyCharm",
    "pip"
  ],

  projects: {
    beginner: [
      "Calculator",
      "File Organizer"
    ],

    intermediate: [
      "Web Scraper",
      "Discord Bot"
    ],

    advanced: [
      "AI Assistant",
      "Automation Toolkit"
    ]
  },

  next: [
    "FastAPI",
    "LangChain"
  ],

  careers: [
    "Python Developer",
    "AI Engineer",
    "Machine Learning Engineer"
  ],

  resources: [
    {
      title: "Python Documentation",
      url: "https://docs.python.org/3/"
    }
  ]
};

export default python;