import type { Technology } from "../../types/Technology";
import { SiMysql } from "react-icons/si";

const mysql: Technology = {
  id: "mysql",

  name: "MySQL",

  category: "Relational Database",

  icon: SiMysql,

  color: "#4479A1",

  description:
    "MySQL is one of the world's most popular relational database systems.",

  why:
    "It is easy to learn, fast, and commonly used with PHP, Node.js, and many CMS platforms.",

  difficulty: "Beginner",

  prerequisites: [
    "SQL Basics"
  ],

  beginner: [
    "Tables",
    "CRUD",
    "SELECT",
    "INSERT",
    "UPDATE",
    "DELETE"
  ],

  intermediate: [
    "Joins",
    "Indexes",
    "Constraints",
    "Views"
  ],

  advanced: [
    "Transactions",
    "Stored Procedures",
    "Replication",
    "Optimization"
  ],

  tools: [
    "MySQL Workbench",
    "phpMyAdmin",
    "DBeaver"
  ],

  projects: {
    beginner: [
      "Library Database"
    ],
    intermediate: [
      "Store Management"
    ],
    advanced: [
      "Online Banking Database"
    ]
  },

  next: [
    "Prisma",
    "ORMs"
  ],

  careers: [
    "Backend Developer",
    "Database Administrator"
  ],

  resources: [
    {
      title: "MySQL Documentation",
      url: "https://dev.mysql.com/doc/"
    }
  ]
};

export default mysql;