import type { Technology } from "../../types/Technology";
import { FaReact } from "react-icons/fa";

const reactNative: Technology = {
  id: "react-native",

  name: "React Native",

  category: "Cross-Platform Mobile",

  icon: FaReact,

  color: "#61DAFB",

  description:
    "React Native allows developers to build native Android and iOS applications using React and JavaScript/TypeScript.",

  why:
    "It enables one codebase for multiple platforms while sharing much of your React knowledge.",

  difficulty: "Intermediate",

  prerequisites: [
    "React",
    "JavaScript"
  ],

  beginner: [
    "Components",
    "Styling",
    "Navigation",
    "Images"
  ],

  intermediate: [
    "Native APIs",
    "State Management",
    "Networking",
    "Storage"
  ],

  advanced: [
    "Performance",
    "Native Modules",
    "Animations",
    "Publishing"
  ],

  tools: [
    "Expo",
    "React Native CLI",
    "Android Studio",
    "Xcode"
  ],

  projects: {
    beginner: [
      "Todo App"
    ],

    intermediate: [
      "Weather App",
      "Chat App"
    ],

    advanced: [
      "Social Media App"
    ]
  },

  next: [
    "Flutter"
  ],

  careers: [
    "Mobile Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "React Native Documentation",
      url: "https://reactnative.dev"
    }
  ]
};

export default reactNative;