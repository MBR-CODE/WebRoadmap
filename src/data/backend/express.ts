import type { Technology } from "../../types/Technology";
import { SiExpress } from "react-icons/si";

const express: Technology = {
  id: "express",

  name: "Express.js",

  category: "Backend Framework",

  icon: SiExpress,

  color: "#000000",

  description:
    "Express is the most widely used framework for building web servers and REST APIs with Node.js.",

  why:
    "It simplifies routing, middleware, request handling and API development.",

  difficulty: "Intermediate",

  prerequisites: [
    "JavaScript",
    "Node.js"
  ],

  beginner: [
    "Express Setup",
    "Routing",
    "Request",
    "Response",
    "Middleware"
  ],

  intermediate: [
    "REST APIs",
    "MVC",
    "Authentication",
    "Validation",
    "Error Handling"
  ],

  advanced: [
    "Security",
    "Rate Limiting",
    "Performance",
    "Production Deployment"
  ],

  tools: [
    "Postman",
    "Thunder Client",
    "Express Generator"
  ],

  projects: {
    beginner: [
      "Notes API",
      "Todo API"
    ],

    intermediate: [
      "Authentication API",
      "Blog Backend"
    ],

    advanced: [
      "E-Commerce Backend",
      "Social Media API"
    ]
  },

  next: [
    "MongoDB",
    "PostgreSQL",
    "JWT",
    "Docker"
  ],

  careers: [
    "Backend Developer",
    "API Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Express Documentation",
      url: "https://expressjs.com/"
    }
  ]
};

export default express;