import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TechOrbit } from './TechOrbit';
import { SocialIcon } from '../molecules/SocialIcon';
import { socialLinks } from '../../data/socialLinks';
import { profile } from '../../data/profile';
import { useTyped } from '../../hooks/useTyped';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Parallax: text moves up slightly as user scrolls down
  const y = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useTyped('hero-typed', {
    strings: [
      'Senior Full Stack Developer',
      'Cloud Architect',
      'React Specialist',
      'Technical Leader',
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
  });

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--bg-hero)' }}
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, var(--accent-glow) 0%, transparent 70%)`,
          y: useTransform(scrollY, [0, 500], [0, 80]),
        }}
      />

      <motion.div
        className="flex flex-col items-center gap-8 relative z-10 px-6 text-center"
        style={{ y, opacity }}
      >
        {/* 3D Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TechOrbit />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold uppercase tracking-wider"
          style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {profile.name.toUpperCase()}
        </motion.h1>

        {/* Typed subtitle */}
        <motion.p
          className="text-lg md:text-xl"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span id="hero-typed" style={{ color: 'var(--accent)' }} />
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex gap-3 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, staggerChildren: 0.1 }}
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} size="md" />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <i className="fa-solid fa-chevron-down text-[var(--accent)] text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};
