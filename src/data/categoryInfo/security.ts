import type { CategoryInfo } from "../../types/CategoryInfo";

const security: CategoryInfo = {
  id: "security",

  title: "Web Security",

  description:
    "Web security protects applications, users and data from attacks and unauthorized access.",

  why:
    "Security is a fundamental skill for every developer, not just security specialists.",

  whatYouBuild: [
    "Secure Login Systems",
    "Protected APIs",
    "Role-Based Access Control",
    "Encrypted Applications"
  ],

  usedBy: [
    "Banks",
    "Government",
    "Cloud Providers",
    "Healthcare Platforms"
  ],

  roadmap: [
    "HTTPS",
    "Authentication",
    "Authorization",
    "JWT",
    "OAuth",
    "OWASP"
  ],

  careers: [
    "Security Engineer",
    "Application Security Engineer",
    "Backend Developer"
  ],

  averageTime: {
    min: 2,
    max: 5,
    unit: "months"
  },

  difficulty: 4
};

export default security;