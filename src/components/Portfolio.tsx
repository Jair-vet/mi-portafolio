import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Project } from '../types';

const featuredProject = projects.find((p) => p.featured) ?? projects[0];
const carouselProjects = projects;

const CARD_WIDTH = 360;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

const ProjectFlipCard: React.FC<{ project: Project }> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 cursor-pointer"
      style={{ width: CARD_WIDTH, height: 280, perspective: 1000 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            inset: 0,
          }}
          className="bg-[#252b2f] rounded-xl shadow-lg flex flex-col items-center justify-center p-5 text-center text-white border border-[#1CB698]/30"
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-sm text-gray-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-[#1CB698]/20 text-[#1CB698] px-2 py-0.5 rounded-full border border-[#1CB698]/30"
              >
                {tool}
              </span>
            ))}
          </div>
          <motion.button
            className="px-5 py-2 bg-[#1CB698] rounded-md text-sm font-semibold cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: '#159876' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
          >
            View Project
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, carouselProjects.length - 1);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="portfolio" className="py-12 bg-[#1e2326] text-white">
      <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-10 justify-center">

        {/* Featured project */}
        <motion.div
          className="lg:w-2/5 w-full bg-[#252b2f] border-2 border-dashed border-[#1CB698] shadow-xl rounded-xl p-8 flex flex-col items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold uppercase mb-6 text-center">Latest Project</h2>

          <motion.img
            src={featuredProject.image}
            alt={featuredProject.name}
            className="rounded-lg cursor-pointer w-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.open(featuredProject.link, '_blank')}
          />

          <div className="mt-6 text-center w-full">
            <h3 className="text-2xl font-bold">{featuredProject.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-1 justify-center mt-3">
              {featuredProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-[#1CB698]/20 text-[#1CB698] px-2 py-0.5 rounded-full border border-[#1CB698]/30"
                >
                  {tool}
                </span>
              ))}
            </div>
            <motion.button
              className="mt-5 px-6 py-3 bg-[#1CB698] rounded-md font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: '#159876' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(featuredProject.link, '_blank')}
            >
              View Project
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="lg:w-3/5 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold uppercase mb-8 text-center">Portfolio</h2>

          <div className="relative">
            {/* Prev */}
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1CB698] rounded-full flex items-center justify-center disabled:opacity-30 cursor-pointer"
              onClick={prev}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ◀
            </motion.button>

            {/* Track */}
            <div className="overflow-hidden mx-12">
              <motion.div
                className="flex gap-6"
                animate={{ x: -currentIndex * STEP }}
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              >
                {carouselProjects.map((project) => (
                  <ProjectFlipCard key={project.id} project={project} />
                ))}
              </motion.div>
            </div>

            {/* Next */}
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#1CB698] rounded-full flex items-center justify-center disabled:opacity-30 cursor-pointer"
              onClick={next}
              disabled={currentIndex === maxIndex}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ▶
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {carouselProjects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? 'bg-[#1CB698] scale-125' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
