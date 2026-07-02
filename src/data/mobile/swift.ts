import type { Technology } from "../../types/Technology";
import { SiSwift } from "react-icons/si";

const swift: Technology = {
  id: "swift",

  name: "Swift",

  category: "Native iOS",

  icon: SiSwift,

  color: "#FA7343",

  description:
    "Swift is Apple's programming language for developing native iPhone, iPad, Mac and Apple Watch applications.",

  why:
    "It is the standard language for modern Apple platform development.",

  difficulty: "Intermediate",

  prerequisites: [
    "Programming Basics"
  ],

  beginner: [
    "Syntax",
    "Variables",
    "Functions",
    "Classes"
  ],

  intermediate: [
    "SwiftUI",
    "Navigation",
    "Networking"
  ],

  advanced: [
    "Concurrency",
    "Performance",
    "Architecture"
  ],

  tools: [
    "Xcode",
    "SwiftUI"
  ],

  projects: {
    beginner: [
      "Notes App"
    ],

    intermediate: [
      "Weather App"
    ],

    advanced: [
      "App Store Application"
    ]
  },

  next: [
    "SwiftUI"
  ],

  careers: [
    "iOS Developer"
  ],

  resources: [
    {
      title: "Swift Documentation",
      url: "https://www.swift.org/documentation/"
    }
  ]
};

export default swift;