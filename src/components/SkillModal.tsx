import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills';

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillModal = ({ isOpen, onClose }: SkillModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#1e2326] text-white p-6 rounded-lg w-[600px] max-w-[95vw] h-[500px] relative shadow-2xl flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-4 text-white text-2xl hover:text-[#1CB698] transition-colors duration-200 cursor-pointer"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>

            {/* Title with slide animation */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentIndex}
                className="text-2xl font-semibold text-[#1CB698] text-center mb-4 uppercase"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {skills[currentIndex].title}
              </motion.h3>
            </AnimatePresence>

            {/* Content */}
            <div className="overflow-y-auto flex-grow pr-2">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={currentIndex}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {skills[currentIndex].details.map((detail, index) => {
                    const colonIdx = detail.indexOf(':');
                    const highlight = colonIdx !== -1 ? detail.slice(0, colonIdx) : detail;
                    const rest = colonIdx !== -1 ? detail.slice(colonIdx) : '';
                    return (
                      <li key={index} className="text-lg">
                        <span className="text-violet-400 font-semibold">{highlight}</span>
                        <span className="text-white">{rest}</span>
                      </li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition-colors duration-300 cursor-pointer"
                onClick={prevSlide}
              >
                ◀ Prev
              </button>
              <button
                className="px-4 py-2 bg-[#1CB698] rounded-md hover:bg-[#159876] transition-colors duration-300 cursor-pointer"
                onClick={nextSlide}
              >
                Next ▶
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index ? 'bg-[#1CB698] scale-125' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
