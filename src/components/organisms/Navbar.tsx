import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_SECTIONS = ['inicio', 'sobremi', 'skills', 'experience', 'portfolio', 'certificates'];

const navLinks = [
  { id: 'inicio',       label: 'INICIO' },
  { id: 'sobremi',      label: 'ABOUT' },
  { id: 'skills',       label: 'SKILLS' },
  { id: 'experience',   label: 'EXPERIENCE' },
  { id: 'portfolio',    label: 'PORTFOLIO' },
  { id: 'certificates', label: 'CERTIFICATES' },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 shadow-lg"
      style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-xl font-bold"
          style={{ fontFamily: "'Righteous', cursive", color: 'var(--accent)' }}
        >
          JA<span style={{ color: 'var(--text-primary)' }}>.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative px-3 py-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: activeSection === id ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: 'var(--accent)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-xl cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}
          >
            <ul className="flex flex-col px-4 pb-4 space-y-1">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block py-2 text-sm font-semibold transition-colors"
                    style={{
                      color: activeSection === id ? 'var(--accent)' : 'var(--text-secondary)',
                      borderLeft: activeSection === id ? '2px solid var(--accent)' : '2px solid transparent',
                      paddingLeft: '8px',
                    }}
                    onClick={handleNavClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
