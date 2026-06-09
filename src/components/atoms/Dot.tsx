import React from 'react';
import { motion } from 'framer-motion';

interface DotProps {
  active: boolean;
  onClick: () => void;
  label?: string;
}

export const Dot: React.FC<DotProps> = ({ active, onClick, label }) => (
  <motion.button
    aria-label={label ?? 'slide indicator'}
    onClick={onClick}
    className="rounded-full cursor-pointer transition-colors duration-300"
    style={{
      width: active ? 28 : 10,
      height: 10,
      backgroundColor: active ? 'var(--accent)' : 'var(--bg-secondary)',
      border: '1px solid var(--border)',
    }}
    animate={{ width: active ? 28 : 10 }}
    transition={{ duration: 0.3 }}
  />
);
