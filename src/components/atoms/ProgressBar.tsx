import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="skill-track">
      <motion.div
        className="skill-fill"
        initial={{ width: '0%' }}
        animate={{ width: isInView ? `${percentage}%` : '0%' }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />
      <motion.span
        className="skill-badge"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {percentage}%
      </motion.span>
    </div>
  );
};
