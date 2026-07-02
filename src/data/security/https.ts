import type { Technology } from "../../types/Technology";
import { FaLock } from "react-icons/fa";

const https: Technology = {
  id: "https",

  name: "HTTPS / TLS",

  category: "Web Security",

  icon: FaLock,

  color: "#2563EB",

  description:
    "HTTPS encrypts communication between browsers and servers using TLS.",

  why:
    "Without HTTPS, passwords, cookies and sensitive information can be intercepted.",

  difficulty: "Beginner",

  prerequisites: [
    "HTTP"
  ],

  beginner: [
    "HTTP vs HTTPS",
    "Certificates",
    "TLS"
  ],

  intermediate: [
    "Certificate Authorities",
    "Let's Encrypt",
    "HSTS"
  ],

  advanced: [
    "TLS Handshake",
    "Cipher Suites",
    "Certificate Pinning"
  ],

  tools: [
    "Let's Encrypt",
    "OpenSSL",
    "Nginx"
  ],

  projects: {
    beginner: [
      "Enable HTTPS"
    ],

    intermediate: [
      "Secure API"
    ],

    advanced: [
      "Production Reverse Proxy"
    ]
  },

  next: [
    "CORS"
  ],

  careers: [
    "Backend Developer",
    "Security Engineer"
  ],

  resources: [
    {
      title: "MDN HTTPS",
      url: "https://developer.mozilla.org/docs/Web/HTTPS"
    }
  ]
};

export default https;