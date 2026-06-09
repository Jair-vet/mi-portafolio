import React from 'react';

interface IconProps {
  className: string;
  size?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ className, size, style }) => (
  <i className={`${className}${size ? ` text-[${size}]` : ''}`} style={style} aria-hidden="true" />
);
