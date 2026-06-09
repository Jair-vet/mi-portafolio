import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 1,
    company: 'Ultra Master Class',
    role: 'Líder Frontend Senior',
    dateStart: 'Sep 2025',
    dateEnd: 'May 2026',
    description:
      'Plataforma educativa de streaming con 50,000+ usuarios activos. Liderazgo técnico completo: arquitectura, IA, pagos, testing E2E y automatización de agentes.',
    responsibilities: [
      'Arquitectura modular Presentación/Dominio/Servicio con React 18, Next.js 14 y TypeScript en monorepo Vite; reducción del bundle un 38%.',
      'Módulo de pagos Stripe: suscripciones recurrentes, historial de transacciones, cambio de plan y generación de documentos fiscales.',
      'Pipeline de eventos asíncronos con Kafka: procesamiento de pagos, notificaciones en tiempo real y métricas de consumo de contenido.',
      'Integración de agentes de IA con Claude API (Anthropic), Gemini y Ollama — asistente inteligente de soporte, generación de contenido y análisis de progreso de alumnos.',
      'Diseño e implementación de servidores MCP (Model Context Protocol) para comunicación entre agentes; orquestación de workflows multi-agente con N8N y pipelines de herramientas personalizadas.',
      'Suite de pruebas E2E con Playwright: flujos críticos de pago, autenticación y reproducción de video; cobertura del 85%+ en rutas de conversión.',
      'Panel administrativo en AWS Amplify + CloudFront + API Gateway con autenticación OAuth 2.0, control de roles (RBAC) y rate limiting con Redis.',
      'CI/CD con GitHub Actions: lint, build, tests Playwright en headless, deploy automático a producción con rollback instantáneo.',
    ],
    tools: ['React 18', 'Next.js', 'TypeScript', 'Stripe', 'Kafka', 'AWS Amplify', 'Claude API', 'Gemini', 'Ollama', 'N8N', 'MCP', 'Playwright', 'Ionic', 'TailwindCSS', 'Redis', 'GitHub Actions'],
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
