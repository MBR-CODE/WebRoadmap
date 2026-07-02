import type { Technology } from "../../types/Technology";
import { SiVercel } from "react-icons/si";

const vercel: Technology = {
  id: "vercel",

  name: "Vercel",

  category: "Cloud Hosting",

  icon: SiVercel,

  color: "#000000",

  description:
    "Vercel is a cloud platform optimized for deploying frontend applications, especially Next.js projects.",

  why:
    "It offers automatic deployments, previews and a global CDN with almost no configuration.",

  difficulty: "Beginner",

  prerequisites: [
    "GitHub"
  ],

  beginner: [
    "Deploy Project",
    "Custom Domain",
    "Environment Variables"
  ],

  intermediate: [
    "Preview Deployments",
    "Analytics",
    "Edge Functions"
  ],

  advanced: [
    "Monorepos",
    "Performance Optimization"
  ],

  tools: [
    "Vercel CLI",
    "GitHub"
  ],

  projects: {
    beginner: [
      "Deploy Portfolio"
    ],

    intermediate: [
      "Deploy Next.js App"
    ],

    advanced: [
      "Production SaaS"
    ]
  },

  next: [
    "AWS"
  ],

  careers: [
    "Frontend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Vercel Documentation",
      url: "https://vercel.com/docs"
    }
  ]
};

export default vercel;