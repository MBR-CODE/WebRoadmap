import type { Technology } from "../../types/Technology";
import { SiPostgresql } from "react-icons/si";

const postgresql: Technology = {
  id: "postgresql",

  name: "PostgreSQL",

  category: "Relational Database",

  icon: SiPostgresql,

  color: "#336791",

  description:
    "PostgreSQL is a powerful open-source relational database used in modern web applications.",

  why:
    "It is reliable, fast, ACID-compliant, and widely used in production systems.",

  difficulty: "Intermediate",

  prerequisites: [
    "SQL Basics"
  ],

  beginner: [
    "Tables",
    "Rows",
    "Columns",
    "Primary Keys",
    "Foreign Keys",
    "Basic Queries"
  ],

  intermediate: [
    "Joins",
    "Indexes",
    "Views",
    "Constraints",
    "Transactions"
  ],

  advanced: [
    "CTEs",
    "Functions",
    "Triggers",
    "Partitioning",
    "Performance Tuning"
  ],

  tools: [
    "pgAdmin",
    "psql",
    "DBeaver"
  ],

  projects: {
    beginner: [
      "Student Database"
    ],
    intermediate: [
      "Blog Backend"
    ],
    advanced: [
      "ERP Database"
    ]
  },

  next: [
    "Prisma",
    "Docker"
  ],

  careers: [
    "Backend Developer",
    "Database Developer"
  ],

  resources: [
    {
      title: "PostgreSQL Documentation",
      url: "https://www.postgresql.org/docs/"
    }
  ]
};

export default postgresql;