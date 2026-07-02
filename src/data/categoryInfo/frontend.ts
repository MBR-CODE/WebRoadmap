import type { CategoryInfo } from "../../types/CategoryInfo";

const frontend: CategoryInfo = {
  id: "frontend",

  title: "Frontend Development",

  description:
    "Frontend development focuses on everything users see and interact with in a website or web application. It combines HTML, CSS and JavaScript with modern frameworks to build responsive, fast and accessible interfaces.",

  why:
    "Frontend is the best starting point for most web developers because you immediately see the results of your work and learn the core technologies that power every website.",

  whatYouBuild: [
    "Landing Pages",
    "Portfolio Websites",
    "Business Websites",
    "Dashboards",
    "Blogs",
    "E-Commerce Stores",
    "Social Networks",
    "Progressive Web Apps"
  ],

  usedBy: [
    "Netflix",
    "YouTube",
    "Facebook",
    "Instagram",
    "Discord",
    "Spotify",
    "Airbnb"
  ],

  roadmap: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js"
  ],

  careers: [
    "Frontend Developer",
    "React Developer",
    "UI Engineer",
    "Web Developer",
    "Full Stack Developer"
  ],

  averageTime: {
    min: 4,
    max: 8,
    unit: "months"
  },

  difficulty: 2
};

export default frontend;