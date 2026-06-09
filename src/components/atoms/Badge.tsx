import React from 'react';

interface BadgeProps {
  label: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => (
  <span
    className={`text-xs bg-[var(--accent-glow)] text-[var(--accent)] px-2 py-0.5 rounded-full border border-[var(--border)] whitespace-nowrap ${className}`}
  >
    {label}
  </span>
);
