import React from "react";
import { projects } from "../data/projects";

const featuredProject = projects[0];

export const FeaturedProject: React.FC = () => {
  return (
    <section className="py-16 bg-[#1e2326] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase mb-10">Latest Project</h2>
      </div>

      <div className="max-w-4xl mx-auto bg-[#1e2326] shadow-xl rounded-lg p-6 flex flex-col md:flex-row">
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
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h3 className="text-2xl font-bold">{featuredProject.name}</h3>
          <p className="text-sm mt-3">{featuredProject.description}</p>

          <div className="mt-4">
            <h4 className="text-md font-semibold">Tools Used:</h4>
            <ul className="text-xs text-gray-400">
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
    </section>
  );
};
