import type { Technology } from "../../types/Technology";
import { SiJavascript } from "react-icons/si";

const javascript: Technology = {
  id: "javascript",

  name: "JavaScript",

  category: "Frontend Language",

  icon: SiJavascript,

  color: "#F7DF1E",

  description:
    "JavaScript adds logic and interactivity to websites.",

  why:
    "Modern websites depend on JavaScript for user interaction, API communication, and dynamic interfaces.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTML",
    "CSS"
  ],

  beginner: [
    "Variables",
    "Data Types",
    "Functions",
    "Arrays",
    "Objects",
    "Loops",
    "Conditions"
  ],

  intermediate: [
    "DOM",
    "Events",
    "Modules",
    "Fetch API",
    "Promises",
    "Async / Await"
  ],

  advanced: [
    "Closures",
    "Event Loop",
    "Prototype",
    "Performance",
    "Design Patterns"
  ],

  tools: [
    "Chrome DevTools",
    "Node.js",
    "npm",
    "ESLint"
  ],

  projects: {
    beginner: [
      "Calculator",
      "Todo App"
    ],

    intermediate: [
      "Weather App",
      "Movie Search"
    ],

    advanced: [
      "Chat Application",
      "Kanban Board"
    ]
  },

  next: [
    "TypeScript",
    "React",
    "Node.js"
  ],

  careers: [
    "Frontend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "JavaScript.info",
      url: "https://javascript.info"
    },
    {
      title: "MDN JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    }
  ]
};

export default javascript;