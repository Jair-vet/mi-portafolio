import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { Dot } from '../atoms/Dot';
import { ExperienceCard } from './ExperienceCard';
import { experiences } from '../../data/experience';

const CARD_WIDTH = 416; // 400px card + 16px gap

export const Experience: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const controls = useAnimationControls();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = experiences.length - 1;

  const goTo = (idx: number) => {
    setCurrent(idx);
    controls.start({ x: -idx * CARD_WIDTH, transition: { type: 'spring', stiffness: 180, damping: 28 } });
  };

  // Auto-scroll
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        controls.start({ x: -next * CARD_WIDTH, transition: { type: 'spring', stiffness: 180, damping: 28 } });
        return next;
      });
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, maxIndex, controls]);

  return (
    <section id="experience" className="py-16 px-6 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Experience" subtitle="Professional journey" />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onClick={() => goTo(Math.max(0, current - 1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={current === 0}
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </motion.button>

          {/* Track */}
          <div className="overflow-hidden mx-14">
            <motion.div className="flex gap-4" animate={controls} initial={{ x: 0 }}>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </motion.div>
          </div>

          {/* Next */}
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onClick={() => goTo(Math.min(maxIndex, current + 1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={current === maxIndex}
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, i) => (
            <Dot key={i} active={i === current} onClick={() => goTo(i)} label={`Experience ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
