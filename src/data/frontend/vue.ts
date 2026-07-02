import type { Technology } from "../../types/Technology";
import { FaVuejs } from "react-icons/fa";

const vue: Technology = {
  id: "vue",

  name: "Vue.js",

  category: "Frontend Framework",

  icon: FaVuejs,

  color: "#42B883",

  description:
    "Vue.js is a progressive JavaScript framework focused on simplicity and developer productivity.",

  why:
    "Vue is known for its gentle learning curve while still being powerful enough for large applications.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  beginner: [
    "Templates",
    "Components",
    "Props",
    "Events",
    "Directives"
  ],

  intermediate: [
    "Composition API",
    "Computed Properties",
    "Watchers",
    "Vue Router",
    "Pinia"
  ],

  advanced: [
    "Performance",
    "SSR",
    "Nuxt",
    "Reusable Composables"
  ],

  tools: [
    "Vue Router",
    "Pinia",
    "Vite",
    "Vue DevTools"
  ],

  projects: {
    beginner: [
      "Todo App",
      "Notes App"
    ],
    intermediate: [
      "Blog",
      "Dashboard"
    ],
    advanced: [
      "E-Commerce",
      "CMS"
    ]
  },

  next: [
    "Nuxt.js"
  ],

  careers: [
    "Frontend Developer"
  ],

  resources: [
    {
      title: "Vue Documentation",
      url: "https://vuejs.org"
    }
  ]
};

export default vue;