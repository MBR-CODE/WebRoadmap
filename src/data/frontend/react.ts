import type { Technology } from "../../types/Technology";
import { FaReact } from "react-icons/fa";

const react: Technology = {
  id: "react",

  name: "React",

  category: "Frontend Library",

  icon: FaReact,

  color: "#61DAFB",

  description:
    "React is the most popular library for building modern user interfaces using reusable components.",

  why:
    "React powers many of today's largest web applications and is one of the most requested frontend skills.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  beginner: [
    "JSX",
    "Components",
    "Props",
    "State",
    "Events"
  ],

  intermediate: [
    "Hooks",
    "Forms",
    "Context API",
    "React Router",
    "API Calls"
  ],

  advanced: [
    "Performance",
    "Code Splitting",
    "Custom Hooks",
    "Memoization",
    "Testing"
  ],

  tools: [
    "Vite",
    "React Router",
    "React DevTools",
    "Redux Toolkit",
    "TanStack Query"
  ],

  projects: {
    beginner: [
      "Todo App",
      "Weather App"
    ],
    intermediate: [
      "Movie App",
      "Admin Dashboard"
    ],
    advanced: [
      "E-Commerce",
      "Real-Time Chat App"
    ]
  },

  next: [
    "Next.js",
    "React Native"
  ],

  careers: [
    "React Developer",
    "Frontend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "React Documentation",
      url: "https://react.dev"
    }
  ]
};

export default react;