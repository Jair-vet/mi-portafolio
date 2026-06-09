import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  width = 360,
  height = 280,
  className = '',
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flex-shrink-0 cursor-pointer ${className}`}
      style={{ width, height, perspective: 1200 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, type: 'spring', stiffness: 110, damping: 18 }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {front}
        </div>
        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            inset: 0,
          }}
          className="rounded-xl shadow-lg overflow-auto"
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
