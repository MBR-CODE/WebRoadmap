import type { Technology } from "../../types/Technology";
import { SiDotnet } from "react-icons/si";

const aspnet: Technology = {
  id: "aspnetcore",

  name: "ASP.NET Core",

  category: "Backend Framework",

  icon: SiDotnet,

  color: "#512BD4",

  description:
    "ASP.NET Core is Microsoft's modern cross-platform framework for building APIs, web applications, and cloud services.",

  why:
    "It is one of the fastest backend frameworks and is widely used for enterprise software.",

  difficulty: "Intermediate",

  prerequisites: [
    "C#",
    ".NET Fundamentals",
    "Object-Oriented Programming"
  ],

  beginner: [
    "Project Structure",
    "Controllers",
    "Minimal APIs",
    "Dependency Injection"
  ],

  intermediate: [
    "Entity Framework Core",
    "Authentication",
    "Authorization",
    "Configuration",
    "Logging"
  ],

  advanced: [
    "Identity",
    "Caching",
    "SignalR",
    "Microservices",
    "Performance Optimization"
  ],

  tools: [
    "Visual Studio",
    "VS Code",
    ".NET CLI",
    "Entity Framework Core"
  ],

  projects: {
    beginner: [
      "Todo API",
      "Notes API"
    ],

    intermediate: [
      "Inventory System",
      "School Management API"
    ],

    advanced: [
      "ERP System",
      "Banking Backend"
    ]
  },

  next: [
    "Azure",
    "Docker",
    "Microservices"
  ],

  careers: [
    ".NET Developer",
    "Backend Developer",
    "Software Engineer"
  ],

  resources: [
    {
      title: "ASP.NET Core Documentation",
      url: "https://learn.microsoft.com/aspnet/core"
    }
  ]
};

export default aspnet;