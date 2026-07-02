import type { Technology } from "../../types/Technology";
import { FaUserLock } from "react-icons/fa";

const authorization: Technology = {
  id: "authorization",

  name: "Authorization",

  category: "Access Control",

  icon: FaUserLock,

  color: "#DC2626",

  description:
    "Authorization determines what an authenticated user is allowed to do.",

  why:
    "After users log in, applications must enforce permissions so users can only access allowed resources.",

  difficulty: "Intermediate",

  prerequisites: [
    "Authentication"
  ],

  beginner: [
    "Roles",
    "Permissions",
    "Protected Routes"
  ],

  intermediate: [
    "RBAC",
    "Claims",
    "Policies"
  ],

  advanced: [
    "ABAC",
    "Fine-Grained Authorization",
    "Multi-Tenant Security"
  ],

  tools: [
    "CASL",
    "Permit.io",
    "Open Policy Agent"
  ],

  projects: {
    beginner: [
      "Admin/User Roles"
    ],

    intermediate: [
      "Role-Based Dashboard"
    ],

    advanced: [
      "Multi-Tenant SaaS Permissions"
    ]
  },

  next: [
    "OWASP Top 10"
  ],

  careers: [
    "Backend Developer",
    "Security Engineer"
  ],

  resources: [
    {
      title: "OWASP Authorization Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/"
    }
  ]
};

export default authorization;