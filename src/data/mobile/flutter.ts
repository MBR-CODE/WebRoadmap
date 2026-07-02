import type { Technology } from "../../types/Technology";
import { SiFlutter } from "react-icons/si";

const flutter: Technology = {
  id: "flutter",

  name: "Flutter",

  category: "Cross-Platform Mobile",

  icon: SiFlutter,

  color: "#02569B",

  description:
    "Flutter is Google's UI toolkit for building beautiful native applications from a single codebase.",

  why:
    "Flutter provides excellent performance and a rich widget ecosystem for Android, iOS, desktop and web.",

  difficulty: "Intermediate",

  prerequisites: [
    "Programming Basics"
  ],

  beginner: [
    "Widgets",
    "Layouts",
    "Navigation",
    "State"
  ],

  intermediate: [
    "Provider",
    "HTTP",
    "Firebase",
    "Local Storage"
  ],

  advanced: [
    "Animations",
    "Performance",
    "Platform Channels"
  ],

  tools: [
    "Flutter SDK",
    "Android Studio",
    "VS Code"
  ],

  projects: {
    beginner: [
      "Calculator"
    ],

    intermediate: [
      "Expense Tracker"
    ],

    advanced: [
      "E-Commerce App"
    ]
  },

  next: [
    "Firebase"
  ],

  careers: [
    "Flutter Developer",
    "Mobile Developer"
  ],

  resources: [
    {
      title: "Flutter Documentation",
      url: "https://docs.flutter.dev"
    }
  ]
};

export default flutter;