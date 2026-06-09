import { useScroll, useTransform, MotionValue } from 'framer-motion';

type ParallaxDepth = 'near' | 'mid' | 'far';

interface ParallaxValues {
  y: MotionValue<string>;
}

const depthMap: Record<ParallaxDepth, [number, number]> = {
  near: [0, -60],
  mid: [0, -35],
  far: [0, -15],
};

export const useParallax = (depth: ParallaxDepth = 'mid'): ParallaxValues => {
  const { scrollYProgress } = useScroll();
  const [start, end] = depthMap[depth];
  const yNum = useTransform(scrollYProgress, [0, 1], [start, end]);
  const y = useTransform(yNum, (v) => `${v}px`);
  return { y };
};
