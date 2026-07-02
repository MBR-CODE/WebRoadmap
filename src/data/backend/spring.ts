import type { Technology } from "../../types/Technology";
import { SiSpringboot } from "react-icons/si";

const spring: Technology = {
  id: "springboot",

  name: "Spring Boot",

  category: "Backend Framework",

  icon: SiSpringboot,

  color: "#6DB33F",

  description:
    "Spring Boot is the most popular Java framework for building scalable enterprise applications.",

  why:
    "It simplifies Java backend development by providing production-ready defaults and a powerful ecosystem.",

  difficulty: "Advanced",

  prerequisites: [
    "Java",
    "Object-Oriented Programming"
  ],

  beginner: [
    "Spring Initializr",
    "Controllers",
    "Dependency Injection",
    "Configuration"
  ],

  intermediate: [
    "REST APIs",
    "Spring Data JPA",
    "Validation",
    "Security"
  ],

  advanced: [
    "Microservices",
    "Spring Cloud",
    "Messaging",
    "Performance"
  ],

  tools: [
    "IntelliJ IDEA",
    "Spring Initializr",
    "Maven",
    "Gradle"
  ],

  projects: {
    beginner: [
      "Book API"
    ],

    intermediate: [
      "E-Commerce Backend",
      "Employee Management System"
    ],

    advanced: [
      "Banking System",
      "Distributed Microservices"
    ]
  },

  next: [
    "Docker",
    "Kubernetes"
  ],

  careers: [
    "Java Developer",
    "Backend Developer"
  ],

  resources: [
    {
      title: "Spring Boot Documentation",
      url: "https://spring.io/projects/spring-boot"
    }
  ]
};

export default spring;