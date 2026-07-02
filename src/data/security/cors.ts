import type { Technology } from "../../types/Technology";
import { FaExchangeAlt } from "react-icons/fa";

const cors: Technology = {
  id: "cors",

  name: "CORS",

  category: "Web Security",

  icon: FaExchangeAlt,

  color: "#2563EB",

  description:
    "Cross-Origin Resource Sharing (CORS) controls which websites are allowed to access resources from your server.",

  why:
    "Without a proper CORS policy, browsers block cross-origin requests or your API could become unnecessarily exposed.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTTP",
    "HTTPS"
  ],

  beginner: [
    "Origins",
    "Same-Origin Policy",
    "Request Headers"
  ],

  intermediate: [
    "Preflight Requests",
    "OPTIONS",
    "Credentials",
    "Allowed Origins"
  ],

  advanced: [
    "Dynamic Policies",
    "Security Pitfalls",
    "Production Configuration"
  ],

  tools: [
    "Browser DevTools",
    "Express CORS Middleware"
  ],

  projects: {
    beginner: [
      "Enable CORS for React + API"
    ],

    intermediate: [
      "Whitelist Multiple Origins"
    ],

    advanced: [
      "Secure Production API"
    ]
  },

  next: [
    "Authentication"
  ],

  careers: [
    "Backend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "MDN CORS",
      url: "https://developer.mozilla.org/docs/Web/HTTP/CORS"
    }
  ]
};

export default cors;