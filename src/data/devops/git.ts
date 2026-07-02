import type { Technology } from "../../types/Technology";
import { FaGitAlt } from "react-icons/fa";

const git: Technology = {
  id: "git",

  name: "Git",

  category: "Version Control",

  icon: FaGitAlt,

  color: "#F05032",

  description:
    "Git is the industry-standard version control system used to track changes in source code.",

  why:
    "Every professional software team uses Git for collaboration, version history, branching, and code reviews.",

  difficulty: "Beginner",

  prerequisites: [],

  beginner: [
    "Repositories",
    "Clone",
    "Status",
    "Add",
    "Commit",
    "Log"
  ],

  intermediate: [
    "Branches",
    "Merge",
    "Rebase",
    "Remote Repositories",
    "Tags"
  ],

  advanced: [
    "Cherry Pick",
    "Bisect",
    "Interactive Rebase",
    "Hooks"
  ],

  tools: [
    "Git",
    "Git Bash",
    "VS Code"
  ],

  projects: {
    beginner: [
      "Track a Personal Project"
    ],

    intermediate: [
      "Team Collaboration"
    ],

    advanced: [
      "Open Source Contribution"
    ]
  },

  next: [
    "GitHub"
  ],

  careers: [
    "Software Developer",
    "DevOps Engineer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Git Documentation",
      url: "https://git-scm.com/doc"
    }
  ]
};

export default git;