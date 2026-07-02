import type { Technology } from "../../types/Technology";
import { FaCss3Alt } from "react-icons/fa";

const css: Technology = {
  id: "css",

  name: "CSS",

  category: "Frontend",

  icon: FaCss3Alt,

  color: "#1572B6",

  description:
    "CSS controls the appearance and layout of web pages.",

  why:
    "Without CSS, every website would look like plain text. CSS is responsible for layouts, colors, spacing, animations, and responsive design.",

  difficulty: "Beginner",

  prerequisites: [
    "HTML"
  ],

  beginner: [
    "Selectors",
    "Colors",
    "Fonts",
    "Margins",
    "Padding",
    "Borders",
    "Display",
    "Box Model"
  ],

  intermediate: [
    "Flexbox",
    "Grid",
    "Position",
    "Responsive Design",
    "Media Queries",
    "Transitions"
  ],

  advanced: [
    "Animations",
    "CSS Variables",
    "Sass",
    "BEM",
    "Architecture"
  ],

  tools: [
    "Chrome DevTools",
    "Tailwind CSS",
    "Sass"
  ],

  projects: {
    beginner: [
      "Landing Page",
      "Profile Card"
    ],

    intermediate: [
      "Responsive Portfolio",
      "Pricing Page"
    ],

    advanced: [
      "Animated Dashboard"
    ]
  },

  next: [
    "JavaScript"
  ],

  careers: [
    "Frontend Developer",
    "UI Developer"
  ],

  resources: [
    {
      title: "MDN CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    }
  ]
};

export default css;