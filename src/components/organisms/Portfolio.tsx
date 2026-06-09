import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { Dot } from '../atoms/Dot';
import { FlipCard } from '../molecules/FlipCard';
import { ToolBadgeList } from '../molecules/ToolBadgeList';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

const CARD_WIDTH = 360;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

const featuredProject = projects.find((p) => p.featured) ?? projects[0];
const carouselProjects = projects;

const CardFront: React.FC<{ project: Project }> = ({ project }) => (
  <img src={project.image} alt={project.name} className="w-full h-full object-cover" draggable={false} />
);

const CardBack: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center p-5 text-center"
    style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
  >
    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
    <ToolBadgeList tools={project.tools} className="justify-center mb-4" />
    <motion.button
      className="px-5 py-2 rounded-md text-sm font-semibold text-white cursor-pointer"
      style={{ background: 'var(--accent)' }}
      whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-hover)' }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
    >
      View Project
    </motion.button>
  </div>
);

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, carouselProjects.length - 1);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="portfolio" className="py-16 px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Portfolio" subtitle="Selected projects" />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Featured */}
          <motion.div
            className="lg:w-2/5 w-full rounded-xl p-8 flex flex-col items-center border border-dashed border-[var(--accent)] shadow-xl"
            style={{ background: 'var(--bg-card)' }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl font-bold uppercase mb-5"
              style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
            >
              Latest Project
            </h2>
            <div className="relative w-full overflow-hidden rounded-lg">
              <motion.img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full rounded-lg cursor-pointer"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open(featuredProject.link, '_blank')}
                draggable={false}
              />
              <div className="absolute inset-0" /> {/* image overlay */}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {featuredProject.name}
              </h3>
              <p className="text-sm mt-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
                {featuredProject.description}
              </p>
              <ToolBadgeList tools={featuredProject.tools} className="justify-center mb-4" />
              <motion.button
                className="px-6 py-3 rounded-md font-semibold text-white text-sm cursor-pointer"
                style={{ background: 'var(--accent)' }}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-hover)' }}
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
            <div className="relative">
              {/* Prev */}
              <motion.button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 cursor-pointer shadow-lg"
                style={{ background: 'var(--accent)', color: '#fff' }}
                onClick={prev}
                disabled={currentIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fa-solid fa-chevron-left text-sm" />
              </motion.button>

              {/* Track */}
              <div className="overflow-hidden mx-12">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: -currentIndex * STEP }}
                  transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                >
                  {carouselProjects.map((project) => (
                    <FlipCard
                      key={project.id}
                      width={CARD_WIDTH}
                      height={280}
                      front={<CardFront project={project} />}
                      back={<CardBack project={project} />}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Next */}
              <motion.button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 cursor-pointer shadow-lg"
                style={{ background: 'var(--accent)', color: '#fff' }}
                onClick={next}
                disabled={currentIndex === maxIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fa-solid fa-chevron-right text-sm" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {carouselProjects.map((_, i) => (
                <Dot key={i} active={i === currentIndex} onClick={() => setCurrentIndex(i)} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
