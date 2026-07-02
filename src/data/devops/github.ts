import type { Technology } from "../../types/Technology";
import { FaGithub } from "react-icons/fa";

const github: Technology = {
  id: "github",

  name: "GitHub",

  category: "Code Hosting",

  icon: FaGithub,

  color: "#181717",

  description:
    "GitHub is the world's most popular platform for hosting Git repositories and collaborating on software.",

  why:
    "It enables collaboration, pull requests, issue tracking, project management, and automated workflows.",

  difficulty: "Beginner",

  prerequisites: [
    "Git"
  ],

  beginner: [
    "Repositories",
    "Push",
    "Pull",
    "README",
    "Issues"
  ],

  intermediate: [
    "Pull Requests",
    "Forks",
    "GitHub Pages",
    "Projects"
  ],

  advanced: [
    "GitHub Actions",
    "Packages",
    "Code Scanning",
    "Dependabot"
  ],

  tools: [
    "GitHub Desktop",
    "GitHub CLI",
    "GitHub Actions"
  ],

  projects: {
    beginner: [
      "Host Your Portfolio"
    ],

    intermediate: [
      "Collaborative Team Project"
    ],

    advanced: [
      "Open Source Library"
    ]
  },

  next: [
    "Docker",
    "CI/CD"
  ],

  careers: [
    "Software Engineer",
    "DevOps Engineer"
  ],

  resources: [
    {
      title: "GitHub Docs",
      url: "https://docs.github.com/"
    }
  ]
};

export default github;