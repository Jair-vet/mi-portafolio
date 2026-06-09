export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
  featured?: boolean;
}

export interface Certificate {
  name: string;
  img: string;
  preview: string;
  pdf: string;
}

export interface SkillCategory {
  title: string;
  details: string[];
}
