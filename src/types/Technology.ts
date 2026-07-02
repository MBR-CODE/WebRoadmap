import type { IconType } from "react-icons";

export interface Technology {
  id: string;

  name: string;

  category: string;

  icon: IconType;

  color: string;

  description: string;

  why: string;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  prerequisites: string[];

  beginner: string[];

  intermediate: string[];

  advanced: string[];

  tools: string[];

  projects: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };

  next: string[];

  careers: string[];

  resources: {
    title: string;
    url: string;
  }[];
}