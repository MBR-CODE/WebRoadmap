import type { Technology } from "../../types/Technology";
import { SiDjango } from "react-icons/si";

const django: Technology = {
  id: "django",

  name: "Django",

  category: "Backend Framework",

  icon: SiDjango,

  color: "#092E20",

  description:
    "Django is a high-level Python framework focused on rapid, secure web development.",

  why:
    "It includes authentication, an ORM, an admin panel, and many built-in features that speed up development.",

  difficulty: "Intermediate",

  prerequisites: [
    "Python"
  ],

  beginner: [
    "Projects",
    "Apps",
    "Views",
    "URLs",
    "Templates"
  ],

  intermediate: [
    "Models",
    "ORM",
    "Forms",
    "Authentication",
    "Admin Panel"
  ],

  advanced: [
    "Django REST Framework",
    "Caching",
    "Celery",
    "Deployment"
  ],

  tools: [
    "Django",
    "Django REST Framework",
    "SQLite",
    "PostgreSQL"
  ],

  projects: {
    beginner: [
      "Blog"
    ],

    intermediate: [
      "School Portal",
      "CMS"
    ],

    advanced: [
      "Marketplace",
      "Learning Platform"
    ]
  },

  next: [
    "Docker",
    "AWS"
  ],

  careers: [
    "Python Developer",
    "Backend Developer"
  ],

  resources: [
    {
      title: "Django Documentation",
      url: "https://docs.djangoproject.com/"
    }
  ]
};

export default django;