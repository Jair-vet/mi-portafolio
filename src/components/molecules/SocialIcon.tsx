import React from 'react';
import { motion } from 'framer-motion';
import type { SocialLink } from '../../types';

interface SocialIconProps {
  link: SocialLink;
  size?: 'sm' | 'md' | 'lg';
}

export const SocialIcon: React.FC<SocialIconProps> = ({ link, size = 'md' }) => {
  const sizeMap = { sm: 'text-lg w-9 h-9', md: 'text-xl w-11 h-11', lg: 'text-2xl w-12 h-12' };

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`social-icon-link ${sizeMap[size]}`}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <i className={link.icon} />
    </motion.a>
  );
};
