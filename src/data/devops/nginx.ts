import type { Technology } from "../../types/Technology";
import { SiNginx } from "react-icons/si";

const nginx: Technology = {
  id: "nginx",

  name: "Nginx",

  category: "Web Server",

  icon: SiNginx,

  color: "#009639",

  description:
    "Nginx is a high-performance web server, reverse proxy and load balancer.",

  why:
    "It serves websites, handles HTTPS, proxies APIs and improves application performance.",

  difficulty: "Intermediate",

  prerequisites: [
    "HTTP",
    "Linux"
  ],

  beginner: [
    "Installation",
    "Configuration",
    "Serving Static Files"
  ],

  intermediate: [
    "Reverse Proxy",
    "SSL",
    "Load Balancing"
  ],

  advanced: [
    "Caching",
    "Performance",
    "High Availability"
  ],

  tools: [
    "Nginx",
    "Certbot"
  ],

  projects: {
    beginner: [
      "Host a Static Website"
    ],

    intermediate: [
      "Reverse Proxy Express API"
    ],

    advanced: [
      "Production Load Balancer"
    ]
  },

  next: [
    "Docker",
    "Cloud Deployment"
  ],

  careers: [
    "Backend Developer",
    "DevOps Engineer"
  ],

  resources: [
    {
      title: "Nginx Documentation",
      url: "https://nginx.org/en/docs/"
    }
  ]
};

export default nginx;