import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => (
  <motion.div
    className={`text-center mb-10 ${light ? 'text-[var(--bg-primary)]' : ''}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2
      className="text-4xl md:text-5xl font-bold uppercase tracking-wide"
      style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm text-[var(--text-secondary)] uppercase tracking-widest">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[var(--accent)]" />
  </motion.div>
);
