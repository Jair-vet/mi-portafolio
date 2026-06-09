import type { OrbitIcon } from '../types';

const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const deviconPlain = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;
const si = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const orbitIcons: OrbitIcon[] = [
  // Frontend
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447440/skills-tools/react_unkzqc.svg', alt: 'React' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806093/Medalla/typescript_fopriv.svg', alt: 'TypeScript' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/javascript_jzy5wj.svg', alt: 'JavaScript' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447263/skills-tools/nextjs_hibjpc.svg', alt: 'Next.js' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806095/Medalla/vuejs_apqtmz.svg', alt: 'Vue.js' },
  { src: devicon('angularjs'), alt: 'Angular' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1672177463/skills-tools/Tailwindcss_xgnxgg.png', alt: 'TailwindCSS' },
  { src: devicon('html5'), alt: 'HTML5' },
  { src: devicon('css3'), alt: 'CSS3' },
  { src: devicon('redux'), alt: 'Redux' },
  { src: devicon('ionic'), alt: 'Ionic' },
  { src: devicon('figma'), alt: 'Figma' },
  // Backend
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806091/Medalla/node-cero-experto_aisefo.svg', alt: 'Node.js' },
  { src: devicon('nestjs'), alt: 'NestJS' },
  { src: devicon('python'), alt: 'Python' },
  { src: devicon('php'), alt: 'PHP' },
  { src: devicon('laravel'), alt: 'Laravel' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781021190/GraphQL_xjquuq.jpg', alt: 'GraphQL' },
  // Databases
  { src: devicon('postgresql'), alt: 'PostgreSQL' },
  { src: devicon('mongodb'), alt: 'MongoDB' },
  { src: devicon('redis'), alt: 'Redis' },
  { src: devicon('supabase'), alt: 'Supabase' },
  // DevOps / Cloud / Tools
  { src: devicon('docker'), alt: 'Docker' },
  { src: devicon('kubernetes'), alt: 'Kubernetes' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1781017953/aws_ckdeeu.webp', alt: 'AWS' },
  { src: si('vultr', '007BFC'), alt: 'Vultr Cloud' },
  { src: devicon('terraform'), alt: 'Terraform' },
  { src: devicon('git'), alt: 'Git' },
  { src: deviconPlain('jest'), alt: 'Jest' },
  { src: devicon('cypressio'), alt: 'Cypress' },
  { src: devicon('apachekafka'), alt: 'Kafka' },
  { src: devicon('wordpress'), alt: 'WordPress' },
  // Developer Tools
  { src: devicon('vscode'), alt: 'VS Code' },
  { src: devicon('postman'), alt: 'Postman' },
  { src: si('gitkraken', '179287'), alt: 'GitKraken' },
  { src: si('warp', '01A4FF'), alt: 'Warp' },
  { src: si('n8n', 'EA4B71'), alt: 'n8n' },
  // AI
  { src: si('googlegemini', '8E75B2'), alt: 'Gemini' },
  { src: si('ollama', '000000'), alt: 'Ollama' },
];
