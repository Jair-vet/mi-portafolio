import React from 'react';

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  flip = false,
  color = 'var(--bg-primary)',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 80"
    style={{
      transform: flip ? 'scaleY(-1)' : undefined,
      display: 'block',
      marginBottom: flip ? undefined : '-1px',
      marginTop: flip ? '-1px' : undefined,
    }}
    preserveAspectRatio="none"
  >
    <path
      fill={color}
      d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
    />
  </svg>
);
