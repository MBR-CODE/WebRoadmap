import type { Technology } from "./Technology";
import type { IconType } from "react-icons";

export interface Category {
  id: string;

  name: string;

  icon: IconType;

  color: string;

  description: string;

  why: string;

  roadmap: string[];

  careers: string[];

  technologies: Technology[];
}