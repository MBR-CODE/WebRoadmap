import type { Technology } from "../../types/Technology";
import { FaHtml5 } from "react-icons/fa";

const html: Technology = {
  id: "html",

  name: "HTML",

  category: "Frontend",

  icon: FaHtml5,

  color: "#E34F26",

  description:
    "HTML is the standard markup language used to structure every webpage.",

  why:
    "Every website starts with HTML. It defines the content and structure that browsers render.",

  difficulty: "Beginner",

  prerequisites: [],

  beginner: [
    "Elements",
    "Tags",
    "Headings",
    "Paragraphs",
    "Links",
    "Images",
    "Lists",
    "Tables"
  ],

  intermediate: [
    "Forms",
    "Semantic HTML",
    "Audio & Video",
    "Accessibility",
    "SEO Basics"
  ],

  advanced: [
    "ARIA",
    "Progressive Enhancement",
    "Performance Optimization"
  ],

  tools: [
    "VS Code",
    "Chrome DevTools",
    "Emmet"
  ],

  projects: {
    beginner: [
      "Personal Profile Page",
      "Recipe Website"
    ],

    intermediate: [
      "Restaurant Website",
      "Portfolio"
    ],

    advanced: [
      "Multi-page Company Website"
    ]
  },

  next: [
    "CSS"
  ],

  careers: [
    "Frontend Developer",
    "Web Developer"
  ],

  resources: [
    {
      title: "MDN HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    }
  ]
};

export default html;