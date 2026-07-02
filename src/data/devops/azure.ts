import type { Technology } from "../../types/Technology";
import { FaWindows } from "react-icons/fa";

const azure: Technology = {
  id: "azure",

  name: "Microsoft Azure",

  category: "Cloud Platform",

  icon: FaWindows,

  color: "#0078D4",

  description:
    "Microsoft Azure is Microsoft's cloud computing platform for hosting applications, databases, AI services and enterprise infrastructure.",

  why:
    "Azure is one of the three major cloud providers and is heavily used in enterprise environments.",

  difficulty: "Advanced",

  prerequisites: [
    ".NET",
    "Networking",
    "Linux"
  ],

  beginner: [
    "Virtual Machines",
    "Storage Accounts",
    "Azure Portal",
    "App Service"
  ],

  intermediate: [
    "Azure SQL",
    "Functions",
    "Virtual Networks",
    "Identity"
  ],

  advanced: [
    "AKS",
    "Azure DevOps",
    "ARM Templates",
    "Monitoring"
  ],

  tools: [
    "Azure Portal",
    "Azure CLI",
    "Azure DevOps"
  ],

  projects: {
    beginner: [
      "Deploy an ASP.NET App"
    ],

    intermediate: [
      "Deploy a Full Stack Website"
    ],

    advanced: [
      "Enterprise Cloud Infrastructure"
    ]
  },

  next: [
    "Kubernetes"
  ],

  careers: [
    "Cloud Engineer",
    "Azure Administrator",
    "DevOps Engineer"
  ],

  resources: [
    {
      title: "Azure Documentation",
      url: "https://learn.microsoft.com/azure/"
    }
  ]
};

export default azure;