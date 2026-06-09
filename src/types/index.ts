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

export type SkillCategory2 = 'frontend' | 'backend' | 'devops' | 'tools';

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  category: SkillCategory2;
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  responsibilities: string[];
  tools: string[];
}

export interface Interest {
  name: string;
  icon: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export interface OrbitIcon {
  src: string;
  alt: string;
}

export type Theme = 'dark' | 'light';

export interface PersonalInfo {
  label: string;
  value: string;
  obfuscated?: boolean;
}
