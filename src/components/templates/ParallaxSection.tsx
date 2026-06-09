import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ParallaxDepth = 'near' | 'mid' | 'far';

const depthOffsets: Record<ParallaxDepth, number> = {
  near: -50,
  mid: -30,
  far: -15,
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  depth?: ParallaxDepth;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  depth = 'mid',
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yNum = useTransform(scrollYProgress, [0, 1], [0, depthOffsets[depth]]);
  const y = useTransform(yNum, (v) => `${v}px`);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div style={{ y }} className="w-full">
        {children}
      </motion.div>
    </div>
  );
};
