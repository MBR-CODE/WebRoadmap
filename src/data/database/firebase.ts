import type { Technology } from "../../types/Technology";
import { SiFirebase } from "react-icons/si";

const firebase: Technology = {
  id: "firebase",

  name: "Firebase",

  category: "Backend as a Service",

  icon: SiFirebase,

  color: "#FFCA28",

  description:
    "Firebase is Google's Backend-as-a-Service platform providing authentication, databases, storage, hosting and analytics.",

  why:
    "It lets developers build applications quickly without managing their own backend infrastructure.",

  difficulty: "Beginner",

  prerequisites: [
    "JavaScript"
  ],

  beginner: [
    "Firestore",
    "Authentication",
    "Hosting",
    "Storage"
  ],

  intermediate: [
    "Cloud Functions",
    "Security Rules",
    "Realtime Database"
  ],

  advanced: [
    "Performance",
    "Cloud Messaging",
    "Analytics",
    "Scalability"
  ],

  tools: [
    "Firebase Console",
    "Firebase CLI",
    "Firestore"
  ],

  projects: {
    beginner: [
      "Authentication App"
    ],

    intermediate: [
      "Realtime Chat"
    ],

    advanced: [
      "Mobile Backend",
      "Collaborative Application"
    ]
  },

  next: [
    "Google Cloud"
  ],

  careers: [
    "Frontend Developer",
    "Full Stack Developer"
  ],

  resources: [
    {
      title: "Firebase Documentation",
      url: "https://firebase.google.com/docs"
    }
  ]
};

export default firebase;