import type { Technology } from "../../types/Technology";
import { SiRedis } from "react-icons/si";

const redis: Technology = {
  id: "redis",

  name: "Redis",

  category: "In-Memory Database",

  icon: SiRedis,

  color: "#DC382D",

  description:
    "Redis is an extremely fast in-memory data store used for caching, sessions, queues and real-time applications.",

  why:
    "Instead of querying your database every time, Redis stores frequently used data in memory, dramatically improving performance.",

  difficulty: "Intermediate",

  prerequisites: [
    "Database Basics",
    "Backend Fundamentals"
  ],

  beginner: [
    "Key-Value Storage",
    "Strings",
    "Lists",
    "Hashes",
    "Sets"
  ],

  intermediate: [
    "Caching",
    "Sessions",
    "Expiration (TTL)",
    "Pub/Sub"
  ],

  advanced: [
    "Streams",
    "Persistence",
    "Replication",
    "Redis Cluster"
  ],

  tools: [
    "Redis CLI",
    "Redis Insight",
    "Docker"
  ],

  projects: {
    beginner: [
      "Simple Cache"
    ],

    intermediate: [
      "User Session Store",
      "Rate Limiter"
    ],

    advanced: [
      "Real-Time Chat",
      "Distributed Cache"
    ]
  },

  next: [
    "Docker",
    "Message Queues"
  ],

  careers: [
    "Backend Developer",
    "Software Engineer"
  ],

  resources: [
    {
      title: "Redis Documentation",
      url: "https://redis.io/docs/"
    }
  ]
};

export default redis;