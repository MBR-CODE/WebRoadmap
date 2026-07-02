import type { CategoryInfo } from "../../types/CategoryInfo";

const devops: CategoryInfo = {
  id: "devops",

  title: "DevOps & Cloud",

  description:
    "DevOps combines development and operations to automate building, testing, deploying and monitoring applications.",

  why:
    "Modern software teams rely on DevOps practices to ship software faster, more reliably and at scale.",

  whatYouBuild: [
    "Deployment Pipelines",
    "Cloud Infrastructure",
    "Docker Containers",
    "CI/CD Systems",
    "Monitoring Platforms"
  ],

  usedBy: [
    "Google",
    "Microsoft",
    "Netflix",
    "Amazon",
    "GitHub"
  ],

  roadmap: [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure"
  ],

  careers: [
    "DevOps Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer"
  ],

  averageTime: {
    min: 4,
    max: 8,
    unit: "months"
  },

  difficulty: 4
};

export default devops;