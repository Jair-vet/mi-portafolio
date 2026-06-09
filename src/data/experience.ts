import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 1,
    company: 'Ultra Master Class',
    role: 'Líder Frontend Senior',
    dateStart: 'Sep 2025',
    dateEnd: 'May 2026',
    description:
      'Plataforma educativa de streaming con gestión completa de suscripciones, pagos y panel administrativo en producción.',
    responsibilities: [
      'Arquitectura modular Presentación/Dominio/Servicio con React 18, Next.js y TypeScript en monorepo con Vite.',
      'Módulo de pagos Stripe: suscripciones, historial de transacciones, cambio de plan y documentos fiscales.',
      'Integración con pipeline Kafka para procesamiento asíncrono de eventos de pago.',
      'Panel administrativo en AWS Amplify con CloudFront y API Gateway.',
      'Automatización con N8N e integración de agentes de IA con Claude API, Gemini y Ollama.',
      'CI/CD con GitHub Actions, ESLint, Prettier y Husky.',
    ],
    tools: ['React 18', 'Next.js', 'TypeScript', 'Stripe', 'Kafka', 'AWS Amplify', 'Ionic', 'TailwindCSS', 'N8N'],
  },
  {
    id: 2,
    company: 'Siac Software',
    role: 'Desarrollador Senior Full Stack',
    dateStart: 'Dic 2024',
    dateEnd: 'Jul 2025',
    description:
      'Arquitectura de microservicios y desarrollo de plataforma empresarial con 10,000+ usuarios concurrentes.',
    responsibilities: [
      'Diseño e implementación de arquitectura de microservicios con Node.js, Express y Docker — reducción de latencia del 45%.',
      '8+ aplicaciones empresariales con React.js, TypeScript, GraphQL, NestJS y PostgreSQL.',
      'Migración local a AWS (EC2, RDS, Lambda, CloudFront, S3) — reducción de costos del 40%.',
      'Optimización de Core Web Vitals: LCP de 1.2s a 0.8s, FID de 80ms a 25ms.',
      'Liderazgo de equipo de 4 desarrolladores junior con revisiones de código y mentoría.',
      'Microservicios REST con Java 11+ y Spring Boot, integración con Redis para caché.',
    ],
    tools: ['React.js', 'TypeScript', 'NestJS', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'Java', 'Spring Boot', 'Redis'],
  },
  {
    id: 3,
    company: 'Binte Consulting',
    role: 'Desarrollador Full Stack (Arquitecto)',
    dateStart: 'Ago 2022',
    dateEnd: 'Oct 2024',
    description:
      'Consultoría técnica y desarrollo de plataforma B2B procesando 500K+ transacciones mensuales con 99.9% uptime.',
    responsibilities: [
      'Evaluación de stack tecnológico para proyectos empresariales, definición de hojas de ruta técnicas.',
      'Plataforma e-commerce B2B con React.js, Node.js, MongoDB y Redux — 500K+ transacciones/mes.',
      'Infraestructura cloud AWS completa con Terraform — reducción del 35% en costos.',
      'PostgreSQL con replicación maestro-esclavo para alta disponibilidad y disaster recovery.',
      'Testing completo: unit (Jest), integración (Supertest), E2E (Cypress) con 80%+ cobertura.',
      'APIs REST con PHP 8 + Laravel, OAuth 2.0 y JWT. Rate limiting con Redis.',
    ],
    tools: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'PostgreSQL', 'AWS', 'Terraform', 'PHP', 'Laravel', 'Cypress'],
  },
  {
    id: 4,
    company: 'Arcma Digital',
    role: 'Desarrollador Frontend (Pasante)',
    dateStart: 'Ene 2022',
    dateEnd: 'Jun 2022',
    description:
      'Desarrollo de sitios web responsivos para más de 20 clientes de comercio electrónico.',
    responsibilities: [
      '15+ páginas web responsivas con JavaScript, Vue.js y HTML5/CSS3.',
      'Integraciones con WordPress, WooCommerce y Elementor para 20+ clientes e-commerce.',
      'Reducción de paquetes en 50% mediante lazy loading, optimización de imágenes y minificación.',
    ],
    tools: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'WordPress', 'WooCommerce'],
  },
];
