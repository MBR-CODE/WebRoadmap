import type { Technology } from "../../types/Technology";
import { FaAngular } from "react-icons/fa";

const angular: Technology = {
  id: "angular",

  name: "Angular",

  category: "Frontend Framework",

  icon: FaAngular,

  color: "#DD0031",

  description:
    "Angular is Google's full-featured framework for building large-scale web applications.",

  why:
    "Angular includes routing, dependency injection, forms, HTTP, testing and many enterprise features out of the box.",

  difficulty: "Advanced",

  prerequisites: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript"
  ],

  beginner: [
    "Components",
    "Templates",
    "Bindings",
    "Directives"
  ],

  intermediate: [
    "Services",
    "Dependency Injection",
    "Routing",
    "Forms",
    "HTTP Client"
  ],

  advanced: [
    "RxJS",
    "Guards",
    "Lazy Loading",
    "State Management",
    "Performance"
  ],

  tools: [
    "Angular CLI",
    "Angular Material",
    "RxJS"
  ],

  projects: {
    beginner: [
      "Task Manager"
    ],
    intermediate: [
      "CRM Dashboard"
    ],
    advanced: [
      "Enterprise ERP"
    ]
  },

  next: [
    "NgRx"
  ],

  careers: [
    "Angular Developer",
    "Enterprise Frontend Developer"
  ],

  resources: [
    {
      title: "Angular Documentation",
      url: "https://angular.dev"
    }
  ]
};

export default angular;