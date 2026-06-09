import type { OrbitIcon } from '../types';

// Using devicons CDN for reliable tech icons
const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const orbitIcons: OrbitIcon[] = [
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447440/skills-tools/react_unkzqc.svg', alt: 'React' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806093/Medalla/typescript_fopriv.svg', alt: 'TypeScript' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1698447263/skills-tools/nextjs_hibjpc.svg', alt: 'Next.js' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/javascript_jzy5wj.svg', alt: 'JavaScript' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806095/Medalla/vuejs_apqtmz.svg', alt: 'Vue.js' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1672177463/skills-tools/Tailwindcss_xgnxgg.png', alt: 'TailwindCSS' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806091/Medalla/node-cero-experto_aisefo.svg', alt: 'Node.js' },
  { src: 'https://res.cloudinary.com/dytlbyofu/image/upload/v1703806089/Medalla/git-github_ag7nyx.svg', alt: 'GitHub' },
  { src: devicon('docker'), alt: 'Docker' },
  { src: devicon('postgresql'), alt: 'PostgreSQL' },
  { src: devicon('mongodb'), alt: 'MongoDB' },
  { src: devicon('nestjs'), alt: 'NestJS' },
  { src: devicon('python'), alt: 'Python' },
  { src: devicon('kubernetes'), alt: 'Kubernetes' },
  { src: devicon('graphql'), alt: 'GraphQL' },
  { src: devicon('redis'), alt: 'Redis' },
];
