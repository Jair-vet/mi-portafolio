import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";

const featuredProject = projects[0];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedProjects, setLoadedProjects] = useState<typeof projects>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setLoadedProjects(JSON.parse(storedProjects));
    } else {
      localStorage.setItem("projects", JSON.stringify(projects));
      setLoadedProjects(projects);
    }
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? loadedProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === loadedProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-12 bg-[#1e2326] text-white">
      <div className="flex flex-col lg:flex-row gap-8 p-10 justify-center">
        
        {/* Latest Project */}
        <div className="lg:w-2/5 w-full bg-[#1e2326] border-2 border-dashed border-[#1CB698] shadow-xl rounded-lg p-10 flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold uppercase text-white">Latest Project</h2>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="w-full">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(featuredProject.link, "_blank")}
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">{featuredProject.name}</h3>
              <div className="mt-4">
                <h4 className="text-md font-semibold">Tools Used:</h4>
                <ul className="text-sm text-gray-400">
                  {featuredProject.tools.map((tool, index) => (
                    <li key={index}>• {tool}</li>
                  ))}
                </ul>
              </div>

              <button
                className="mt-4 px-6 py-3 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
                onClick={() => window.open(featuredProject.link, "_blank")}
              >
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio - Carrusel */}
        <div className="lg:w-4/5 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase mb-10">Portfolio</h2>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Botón de Prev */}
            <button
              className="absolute left-0 px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer z-10"
              onClick={prevSlide}
            >
              ◀
            </button>

            {/* Carrusel */}
            <div className="overflow-hidden w-full flex justify-start">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(calc(-${currentIndex * 500}px + 20px))`, // Ajuste del scroll
                }}
              >
                {loadedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[500px] h-[300px] mx-4 relative flip-card"
                  >
                    <div className="flip-card-inner">
                      
                      {/* Lado Frontal - Imagen */}
                      <div className="flip-card-front">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                      </div>

                      {/* Lado Trasero - Información */}
                      <div className="flip-card-back">
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <p className="text-sm mt-3">{project.description}</p>

                        <div className="mt-4">
                          <h4 className="text-md font-semibold">Tools Used:</h4>
                          <ul className="text-xs text-gray-400">
                            {project.tools.map((tool, index) => (
                              <li key={index}>• {tool}</li>
                            ))}
                          </ul>
                        </div>

                        <button
                          className="mt-4 px-6 py-3 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          View Project
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de Next */}
            <button
              className="absolute right-0 px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer z-10"
              onClick={nextSlide}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
