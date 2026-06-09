import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "An advanced e-commerce platform built with Next.js, TailwindCSS, and Firebase for authentication and database.",
    tools: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Stripe"],
    image: "https://res.cloudinary.com/dytlbyofu/image/upload/v1715032456/Applications%20made/Administrador-Productos_wnuch5.png",
    link: "https://your-ecommerce-project.com",
    featured: true,
  },
  {
    id: 2,
    name: "AI Chatbot Assistant",
    description: "A real-time AI chatbot using OpenAI API, React, and Node.js.",
    tools: ["React", "TypeScript", "Node.js", "Express", "OpenAI API"],
    image: "https://res.cloudinary.com/dytlbyofu/image/upload/v1713913044/Applications%20made/Calculadora_upbshj.png",
    link: "https://your-ai-chatbot.com",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, built with Vite, React, and TailwindCSS.",
    tools: ["Vite", "React", "TailwindCSS", "TypeScript"],
    image: "https://res.cloudinary.com/dytlbyofu/image/upload/v1713913048/Applications%20made/Clima-React-Typescript_jkstxg.png",
    link: "https://your-portfolio.com",
  },
];
