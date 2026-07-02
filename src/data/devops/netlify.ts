import type { Technology } from "../../types/Technology";
import { SiNetlify } from "react-icons/si";

const netlify: Technology = {
  id: "netlify",

  name: "Netlify",

  category: "Cloud Hosting",

  icon: SiNetlify,

  color: "#00C7B7",

  description:
    "Netlify is a cloud platform for deploying static sites and frontend applications with CI/CD built in.",

  why:
    "It provides an easy deployment workflow for React, Vue, Angular and other frontend frameworks.",

  difficulty: "Beginner",

  prerequisites: [
    "GitHub"
  ],

  beginner: [
    "Deploy Site",
    "Drag & Drop",
    "Custom Domain"
  ],

  intermediate: [
    "Forms",
    "Functions",
    "Redirects"
  ],

  advanced: [
    "Build Plugins",
    "Edge Functions"
  ],

  tools: [
    "Netlify CLI"
  ],

  projects: {
    beginner: [
      "Portfolio Website"
    ],

    intermediate: [
      "React Application"
    ],

    advanced: [
      "Company Landing Page"
    ]
  },

  next: [
    "AWS"
  ],

  careers: [
    "Frontend Developer"
  ],

  resources: [
    {
      title: "Netlify Documentation",
      url: "https://docs.netlify.com/"
    }
  ]
};

export default netlify;