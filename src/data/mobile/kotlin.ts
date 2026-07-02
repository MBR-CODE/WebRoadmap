import type { Technology } from "../../types/Technology";
import { SiKotlin } from "react-icons/si";

const kotlin: Technology = {
  id: "kotlin",

  name: "Kotlin",

  category: "Native Android",

  icon: SiKotlin,

  color: "#7F52FF",

  description:
    "Kotlin is Google's recommended language for Android application development.",

  why:
    "It is concise, modern and fully interoperable with Java.",

  difficulty: "Intermediate",

  prerequisites: [
    "Programming Basics"
  ],

  beginner: [
    "Syntax",
    "Classes",
    "Functions",
    "Collections"
  ],

  intermediate: [
    "Jetpack Compose",
    "Navigation",
    "Networking"
  ],

  advanced: [
    "Coroutines",
    "Architecture",
    "Performance"
  ],

  tools: [
    "Android Studio",
    "Jetpack Compose"
  ],

  projects: {
    beginner: [
      "Calculator"
    ],

    intermediate: [
      "Task Manager"
    ],

    advanced: [
      "Production Android App"
    ]
  },

  next: [
    "Jetpack Compose"
  ],

  careers: [
    "Android Developer"
  ],

  resources: [
    {
      title: "Kotlin Documentation",
      url: "https://kotlinlang.org/docs/"
    }
  ]
};

export default kotlin;