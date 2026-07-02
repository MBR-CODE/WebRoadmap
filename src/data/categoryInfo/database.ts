import type { CategoryInfo } from "../../types/CategoryInfo";

const database: CategoryInfo = {
  id: "database",

  title: "Databases",

  description:
    "Databases store, organize and retrieve the information used by applications. Every modern application relies on a database to persist data.",

  why:
    "Understanding databases is essential for building scalable, secure and reliable applications.",

  whatYouBuild: [
    "User Databases",
    "Inventory Systems",
    "Analytics Platforms",
    "Financial Systems",
    "Content Management Systems",
    "Cloud Applications"
  ],

  usedBy: [
    "Amazon",
    "Netflix",
    "Spotify",
    "Facebook",
    "Google"
  ],

  roadmap: [
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Database Design"
  ],

  careers: [
    "Backend Developer",
    "Database Administrator",
    "Data Engineer"
  ],

  averageTime: {
    min: 2,
    max: 4,
    unit: "months"
  },

  difficulty: 3
};

export default database;