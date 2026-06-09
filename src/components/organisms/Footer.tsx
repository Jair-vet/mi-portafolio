import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from '../molecules/SocialIcon';
import { socialLinks } from '../../data/socialLinks';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => (
  <footer
    className="py-10 px-6 border-t"
    style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
  >
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
      <motion.p
        className="text-lg font-bold"
        style={{ fontFamily: "'Righteous', cursive", color: 'var(--accent)' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {profile.name}
      </motion.p>

      <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
        Senior Full Stack Developer — Building scalable, modern web applications.
      </p>

      <div className="flex gap-6 mt-1">
        {socialLinks.map((link) => (
          <SocialIcon key={link.label} link={link} size="lg" />
        ))}
      </div>

      <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
        © {new Date().getFullYear()} Jair Aceves. All rights reserved.
      </p>
    </div>
  </footer>
);
