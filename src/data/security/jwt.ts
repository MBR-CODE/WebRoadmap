import type { Technology } from "../../types/Technology";
import { SiJsonwebtokens } from "react-icons/si";

const jwt: Technology = {
  id: "jwt",

  name: "JSON Web Token (JWT)",

  category: "Authentication",

  icon: SiJsonwebtokens,

  color: "#000000",

  description:
    "JWT is a compact token format used to securely transmit user identity between the client and server.",

  why:
    "JWT is one of the most common authentication methods used in REST APIs and modern web applications.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTTP",
    "Backend Development"
  ],

  beginner: [
    "JWT Structure",
    "Header",
    "Payload",
    "Signature"
  ],

  intermediate: [
    "Signing",
    "Verification",
    "Access Tokens",
    "Refresh Tokens"
  ],

  advanced: [
    "Token Rotation",
    "Revocation",
    "Security Best Practices"
  ],

  tools: [
    "jsonwebtoken",
    "jwt.io"
  ],

  projects: {
    beginner: [
      "Login API"
    ],

    intermediate: [
      "Authentication System"
    ],

    advanced: [
      "Secure SaaS Authentication"
    ]
  },

  next: [
    "OAuth 2.0"
  ],

  careers: [
    "Backend Developer",
    "Full Stack Developer",
    "Security Engineer"
  ],

  resources: [
    {
      title: "JWT Introduction",
      url: "https://jwt.io/introduction"
    }
  ]
};

export default jwt;