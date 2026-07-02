import type { Technology } from "../../types/Technology";
import { SiSqlite } from "react-icons/si";

const sqlite: Technology = {
  id: "sqlite",

  name: "SQLite",

  category: "Embedded Database",

  icon: SiSqlite,

  color: "#003B57",

  description:
    "SQLite is a lightweight relational database stored in a single file.",

  why:
    "Perfect for small applications, prototypes, desktop software and mobile apps.",

  difficulty: "Beginner",

  prerequisites: [
    "SQL Basics"
  ],

  beginner: [
    "Tables",
    "CRUD",
    "Primary Keys",
    "Basic Queries"
  ],

  intermediate: [
    "Indexes",
    "Joins",
    "Constraints"
  ],

  advanced: [
    "Transactions",
    "Performance",
    "Optimization"
  ],

  tools: [
    "DB Browser for SQLite",
    "SQLite CLI"
  ],

  projects: {
    beginner: [
      "Notes App"
    ],

    intermediate: [
      "Expense Tracker"
    ],

    advanced: [
      "Offline Desktop Application"
    ]
  },

  next: [
    "PostgreSQL",
    "MySQL"
  ],

  careers: [
    "Software Developer"
  ],

  resources: [
    {
      title: "SQLite Documentation",
      url: "https://sqlite.org/docs.html"
    }
  ]
};

export default sqlite;