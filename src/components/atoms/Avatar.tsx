import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = '200px', className = '' }) => (
  <div
    className={`rounded-full overflow-hidden border-4 border-dashed border-[var(--accent)] flex-shrink-0 ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>
);
