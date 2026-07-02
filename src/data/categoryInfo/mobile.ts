import type { CategoryInfo } from "../../types/CategoryInfo";

const mobile: CategoryInfo = {
  id: "mobile",

  title: "Mobile Development",

  description:
    "Mobile development focuses on building applications for Android and iOS devices.",

  why:
    "Billions of people use smartphones daily, making mobile one of the largest software markets.",

  whatYouBuild: [
    "Android Apps",
    "iPhone Apps",
    "Cross-Platform Apps",
    "Business Apps",
    "Games"
  ],

  usedBy: [
    "Uber",
    "Instagram",
    "WhatsApp",
    "TikTok",
    "Spotify"
  ],

  roadmap: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin"
  ],

  careers: [
    "Mobile Developer",
    "Android Developer",
    "iOS Developer"
  ],

  averageTime: {
    min: 5,
    max: 9,
    unit: "months"
  },

  difficulty: 3
};

export default mobile;