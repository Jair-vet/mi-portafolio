import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    title: "Front-end Development",
    details: [
      "React.js: Using Hooks, Context API, SPA, Next.js, Server Components, and Redux.",
      "Angular: Enterprise applications with lazy loading, RxJS, TypeScript, and NgRx for state management.",
      "Vue.js: Dynamic interfaces using Vuex, Pinia, and Nuxt.js for SSR and static site generation.",
      "UI Frameworks: TailwindCSS, Material UI, Bootstrap, React Bootstrap, Angular Material, NG-Bootstrap, Nebular, and Vuetify.",
      "State Management: Redux, Zustand, Jotai, Recoil, NgRx (Angular), Vuex, and Pinia (Vue).",
      "Component Libraries: Storybook for UI components, Chakra UI, Ant Design, PrimeReact, and Radix UI.",
      "TypeScript: Strongly typed applications for scalability and maintainability.",
      "GraphQL & REST APIs: Apollo Client, Relay, Fetch, Axios, and tRPC.",
    ],
  },
  {
    title: "Back-end Development",
    details: [
      "Node.js & Express: RESTful APIs, authentication with JWT & OAuth, and database management.",
      "Nest.js: Scalable applications using modular architecture and TypeScript.",
      "Databases: PostgreSQL, MySQL, MongoDB, Firebase",
      "Python & Django: High-performance back-end development.",
      "Authentication & Authorization: OAuth, Firebase Auth, JWT, and Clerk.",
    ],
  },
  {
    title: "Testing & Code Quality",
    details: [
      "Jest & React Testing Library: Unit and integration testing for robust applications.",
      "Cypress & Playwright: End-to-end testing automation.",
      "ESLint & Prettier: Code linting and formatting.",
      "Storybook: Component testing and isolation.",
      "Swagger & OpenAPI: API documentation and validation.",
    ],
  },
  {
    title: "DevOps & Development Tools",
    details: [
      "Git & GitHub: Version control, branching strategies, and code reviews.",
      "Docker & Kubernetes: Containerization and orchestration.",
      "CI/CD: GitHub Actions, Vercel, and automated deployment pipelines.",
    ],
  },
  {
    title: "Design Patterns & Best Practices",
    details: [
      "Application of design patterns: MVC, Singleton, Factory, Observer, and Repository.",
      "Clean Code principles and SOLID architecture.",
      "Micro Frontends: Using Webpack Module Federation.",
      "Progressive Web Apps (PWAs): Service Workers, Workbox, and offline capabilities.",
    ],
  },
];
