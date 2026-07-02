import type { Technology } from "../../types/Technology";
import { SiMongodb } from "react-icons/si";

const mongodb: Technology = {
  id: "mongodb",

  name: "MongoDB",

  category: "NoSQL Database",

  icon: SiMongodb,

  color: "#47A248",

  description:
    "MongoDB is a document database that stores data as flexible JSON-like documents.",

  why:
    "It works naturally with JavaScript and is widely used in MERN and MEAN stacks.",

  difficulty: "Beginner",

  prerequisites: [
    "JavaScript"
  ],

  beginner: [
    "Collections",
    "Documents",
    "CRUD",
    "Compass"
  ],

  intermediate: [
    "Indexes",
    "Aggregation",
    "Relationships",
    "Validation"
  ],

  advanced: [
    "Replication",
    "Sharding",
    "Transactions",
    "Performance"
  ],

  tools: [
    "MongoDB Compass",
    "MongoDB Atlas",
    "Mongoose"
  ],

  projects: {
    beginner: [
      "Todo API"
    ],
    intermediate: [
      "Chat Backend"
    ],
    advanced: [
      "Social Media Platform"
    ]
  },

  next: [
    "Mongoose",
    "Atlas"
  ],

  careers: [
    "Backend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "MongoDB Documentation",
      url: "https://www.mongodb.com/docs/"
    }
  ]
};

export default mongodb;