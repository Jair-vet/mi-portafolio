import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillModal } from './SkillModal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTyped } from '../hooks/useTyped';

const NAV_SECTIONS = ['inicio', 'sobremi', 'portfolio', 'certificates'];

const navLinks = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'sobremi', label: 'ABOUT ME' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'certificates', label: 'CERTIFICATES' },
];

const Navbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS);

  useTyped('typed-text', { strings: ['Full Stack'] });

  return (
    <div className="fixed bg-[#1e2326] w-full top-0 left-0 z-50 shadow-lg">
      <header className="max-w-[1100px] mx-auto flex justify-between items-center px-4 py-5">
        <div className="font-mono text-[36px]">
          <span id="typed-text" className="font-mono text-[#1CB698]" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex list-none">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="relative p-3 mx-1">
                <a
                  href={`#${id}`}
                  className="text-[#1CB698] hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1CB698]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            ))}
            <li className="p-3 mx-1">
              <button
                className="text-[#1CB698] hover:text-white transition-colors duration-200 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                SKILLS
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuVisible((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuVisible ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuVisible && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col px-4 pb-4 space-y-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block py-2 text-[#1CB698] hover:text-white transition-colors duration-200 ${
                      activeSection === id ? 'border-l-2 border-[#1CB698] pl-2' : ''
                    }`}
                    onClick={() => setMenuVisible(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="py-2 text-[#1CB698] hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => { setIsModalOpen(true); setMenuVisible(false); }}
                >
                  SKILLS
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Navbar;
