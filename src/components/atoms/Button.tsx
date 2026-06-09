import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'ghost' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClass: Record<Variant, string> = {
  primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
  ghost:   'bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white',
  outline: 'cv-button',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...rest }) => {
  return (
    <motion.button
      className={`px-6 py-3 rounded-md font-semibold text-sm cursor-pointer transition-colors duration-300 ${variantClass[variant]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...(rest as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
};
