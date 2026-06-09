import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeContext } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        <motion.i
          key={theme}
          className={theme === 'dark' ? 'fa-solid fa-sun text-sm' : 'fa-solid fa-moon text-sm'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      </AnimatePresence>
    </motion.button>
  );
};
