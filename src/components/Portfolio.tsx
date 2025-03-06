import React, { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";


const featuredProject = projects[0];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-12 bg-[#1e2326] text-white">
        <div className="flex gap-4 p-10">
            {/* Lastes Project */}
            <div className="w-3/6 mx-auto bg-[#1e2326] border-2 border-dashed border-[#1CB698] shadow-xl rounded-lg p-10 flex flex-row md:flex-col items-center">
                {/* Contenedor del Título */}
                <div className="w-full text-center mb-4 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold uppercase text-white">Latest Project</h2>
                </div>

                {/* Contenedor de Imagen e Información */}
                <div className="w-full flex flex-row">
                    {/* Imagen */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={featuredProject.image}
                            alt={featuredProject.name}
                            className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => window.open(featuredProject.link, "_blank")}
                        />
                    </div>

                    {/* Información */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-white">
                        <h3 className="text-2xl font-bold">{featuredProject.name}</h3>

                        <div className="mt-4">
                            <h4 className="text-md font-semibold">Tools Used:</h4>
                            <ul className="text-xs text-gray-400">
                                {featuredProject.tools.map((tool, index) => (
                                    <li key={index}>• {tool}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Botón */}
                        <button
                            className="mt-4 px-6 py-3 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
                            onClick={() => window.open(featuredProject.link, "_blank")}
                        >
                            View Project
                        </button>
                    </div>
                </div>
            </div>

            
            {/* All Projects */}
            <div className="w-3/6">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold uppercase mb-10">Portfolio</h2>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Botón de Prev */}
                    <button
                    className="absolute left-0 px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
                    onClick={prevSlide}
                    >
                    ◀
                    </button>

                    {/* Carrusel */}
                    <div className="overflow-hidden w-[320px]">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 320}px)` }}
                    >
                        {projects.map((project) => (
                        <div key={project.id} className="flex-shrink-0 w-[320px] mx-2">
                            <ProjectCard project={project} />
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Botón de Next */}
                    <button
                    className="absolute right-0 px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
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
