import type { Technology } from "../../types/Technology";
import { FaUserShield } from "react-icons/fa";

const authentication: Technology = {
  id: "authentication",

  name: "Authentication",

  category: "Identity",

  icon: FaUserShield,

  color: "#16A34A",

  description:
    "Authentication verifies the identity of a user before granting access.",

  why:
    "Every secure application must verify who a user is before allowing them to access protected resources.",

  difficulty: "Beginner",

  prerequisites: [
    "HTTP"
  ],

  beginner: [
    "Passwords",
    "Hashing",
    "Sessions",
    "Cookies"
  ],

  intermediate: [
    "JWT",
    "OAuth",
    "Multi-Factor Authentication"
  ],

  advanced: [
    "Single Sign-On",
    "Identity Providers",
    "Passwordless Authentication"
  ],

  tools: [
    "Passport.js",
    "Clerk",
    "Auth.js"
  ],

  projects: {
    beginner: [
      "Login System"
    ],

    intermediate: [
      "JWT Authentication"
    ],

    advanced: [
      "Enterprise SSO"
    ]
  },

  next: [
    "Authorization"
  ],

  careers: [
    "Backend Developer",
    "Security Engineer"
  ],

  resources: [
    {
      title: "OWASP Authentication Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/"
    }
  ]
};

export default authentication;