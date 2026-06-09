import type { Skill } from '../types';

const d = (n: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`;

export const technicalSkills: Skill[] = [
  { name: 'HTML & CSS',  percentage: 95, category: 'frontend', icon: d('html5') },
  { name: 'JavaScript', percentage: 92, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/javascript_jzy5wj.svg' },
  { name: 'TypeScript', percentage: 90, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806093/Medalla/typescript_fopriv.svg' },
  { name: 'React.js',   percentage: 90, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447440/skills-tools/react_unkzqc.svg' },
  { name: 'Next.js',    percentage: 85, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447263/skills-tools/nextjs_hibjpc.svg' },
  { name: 'TailwindCSS',percentage: 90, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1672177463/skills-tools/Tailwindcss_xgnxgg.png' },
  { name: 'Vue.js',     percentage: 75, category: 'frontend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806095/Medalla/vuejs_apqtmz.svg' },
  { name: 'Angular',    percentage: 40, category: 'frontend', icon: d('angularjs') },
];

export const professionalSkills: Skill[] = [
  { name: 'Node.js',    percentage: 85, category: 'backend', icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806091/Medalla/node-cero-experto_aisefo.svg' },
  { name: 'NestJS',     percentage: 75, category: 'backend', icon: d('nestjs') },
  { name: 'PostgreSQL', percentage: 80, category: 'backend', icon: d('postgresql') },
  { name: 'MongoDB',    percentage: 75, category: 'backend', icon: d('mongodb') },
  { name: 'Docker',     percentage: 80, category: 'devops',  icon: d('docker') },
  { name: 'AWS',        percentage: 75, category: 'devops',  icon: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781017953/aws_ckdeeu.webp' },
  { name: 'Git & CI/CD',percentage: 90, category: 'devops',  icon: d('git') },
  { name: 'Python',     percentage: 60, category: 'backend', icon: d('python') },
];
