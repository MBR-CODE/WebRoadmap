export interface CategoryInfo {
  id: string;

  title: string;

  description: string;

  why: string;

  whatYouBuild: string[];

  usedBy: string[];

  roadmap: string[];

  careers: string[];

  averageTime: {
    min: number;
    max: number;
    unit: "weeks" | "months" | "years";
  };

  difficulty: 1 | 2 | 3 | 4 | 5;
}