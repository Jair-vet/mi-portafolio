import { useState } from "react";

const skills = [
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

export const SkillModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 backdrop-blur-sm z-10 transition-opacity" onClick={onClose}>
      {/* Modal Card */}
      <div
        className="bg-[#1e2326] text-white p-6 rounded-lg w-[600px] h-[500px] relative shadow-lg flex flex-col transition-all"
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
      >
        {/* Botón de Cerrar */}
        <button 
          className="absolute top-2 w-7 h-7 right-4 text-white text-2xl hover:text-[#159876] hover:cursor-pointer transition-all duration-200"
          onClick={onClose}
        >
          x
        </button>

        {/* Título */}
        <h3 className="text-2xl font-semibold text-[#1CB698] text-center mb-4 uppercase">{skills[currentIndex].title}</h3>

       {/* Lista de detalles con palabras clave resaltadas */}
       <div className="overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <ul className="space-y-2">
            {skills[currentIndex].details.map((detail, index) => {
              const [highlight, ...rest] = detail.split(":"); // Divide en dos partes
              return (
                <li key={index} className="text-lg">
                  <span className="text-violet-600 font-semibold">{highlight}:</span>
                  <span className="text-white"> {rest.join(":")}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between mt-6">
          <button 
            className="px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
            onClick={prevSlide}
          >
            ◀ Prev
          </button>
          <button 
            className="px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
            onClick={nextSlide}
          >
            Next ▶
          </button>
        </div>

        {/* Indicadores de sección */}
        <div className="flex justify-center mt-4 space-x-2">
          {skills.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? "bg-[#52F7CBFF]" : "bg-gray-200"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
