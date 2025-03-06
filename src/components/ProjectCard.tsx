import React from "react";

interface ProjectProps {
  project: {
    id: number;
    name: string;
    description: string;
    tools: string[];
    image: string;
    link: string;
  };
}

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-[#1e2326] text-white rounded-lg shadow-lg p-6 w-80">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-sm mt-2">{project.description}</p>
      <div className="mt-4">
        <h4 className="text-md font-semibold">Tools Used:</h4>
        <ul className="text-xs text-gray-400">
          {project.tools.map((tool, index) => (
            <li key={index}>• {tool}</li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition duration-300 cursor-pointer"
        onClick={() => window.open(project.link, "_blank")}
      >
        View More
      </button>
    </div>
  );
};
