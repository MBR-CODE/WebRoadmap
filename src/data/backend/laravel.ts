import type { Technology } from "../../types/Technology";
import { FaLaravel } from "react-icons/fa";

const laravel: Technology = {
  id: "laravel",

  name: "Laravel",

  category: "Backend Framework",

  icon: FaLaravel,

  color: "#FF2D20",

  description:
    "Laravel is the leading PHP framework for building modern web applications with elegant syntax.",

  why:
    "It provides authentication, routing, queues, mail, ORM, and many features out of the box.",

  difficulty: "Intermediate",

  prerequisites: [
    "PHP"
  ],

  beginner: [
    "Routing",
    "Controllers",
    "Blade",
    "Models"
  ],

  intermediate: [
    "Middleware",
    "Eloquent ORM",
    "Validation",
    "Authentication"
  ],

  advanced: [
    "Queues",
    "Events",
    "Broadcasting",
    "Performance"
  ],

  tools: [
    "Composer",
    "Laravel Sail",
    "Laravel Forge",
    "Laravel Nova"
  ],

  projects: {
    beginner: [
      "Blog"
    ],

    intermediate: [
      "CRM",
      "Booking System"
    ],

    advanced: [
      "Marketplace",
      "Enterprise Portal"
    ]
  },

  next: [
    "Docker",
    "AWS"
  ],

  careers: [
    "PHP Developer",
    "Backend Developer"
  ],

  resources: [
    {
      title: "Laravel Documentation",
      url: "https://laravel.com/docs"
    }
  ]
};

export default laravel;