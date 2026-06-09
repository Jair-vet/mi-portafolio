import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '../atoms/Avatar';
import { InfoItem } from '../molecules/InfoItem';
import { SectionTitle } from '../atoms/SectionTitle';
import { profile } from '../../data/profile';
import { deobfuscate } from '../../utils/obfuscate';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const specializations = [
  {
    icon: 'fa-solid fa-brain',
    title: 'AI Integration & Models',
    items: ['Claude API (Anthropic)', 'Google Gemini', 'Ollama (local LLMs)', 'N8N automation pipelines', 'AI-powered assistants in production'],
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Event-Driven & MCP',
    items: ['Apache Kafka event pipelines', 'MCP (Model Context Protocol)', 'Async microservice communication', 'Agent-to-agent tool calling', 'Real-time event processing'],
  },
  {
    icon: 'fa-solid fa-flask-vial',
    title: 'Testing: Playwright & E2E',
    items: ['Playwright E2E browser automation', 'Jest unit & integration tests', 'Cypress component testing', 'Reusable hooks & skill patterns', '85%+ coverage on critical flows'],
  },
  {
    icon: 'fa-solid fa-diagram-project',
    title: 'Agent Orchestration',
    items: ['Multi-agent workflow design', 'Orchestrator / subagent patterns', 'Custom MCP server & client', 'Tool-calling & memory management', 'Claude Code & Cursor integration'],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Auth & Security',
    items: ['OAuth 2.0 & JWT flows', 'RBAC (role-based access control)', 'Rate limiting with Redis', 'OWASP Top 10 hardening', 'CORS, CSRF & XSS protection'],
  },
];

const interests = [
  { name: 'Gaming',  icon: 'fa-solid fa-gamepad' },
  { name: 'Music',   icon: 'fa-solid fa-music' },
  { name: 'Travel',  icon: 'fa-solid fa-plane' },
  { name: 'Mac OS',  icon: 'fa-brands fa-apple' },
  { name: 'Sports',  icon: 'fa-solid fa-futbol' },
  { name: 'Videos',  icon: 'fa-solid fa-video' },
  { name: 'Cars',    icon: 'fa-solid fa-car' },
  { name: 'Food',    icon: 'fa-solid fa-utensils' },
];

export const AboutMe: React.FC = () => {
  const email = deobfuscate(profile.emailEncoded);
  const phone = deobfuscate(profile.phoneEncoded);

  const personalInfo = [
    { label: 'Birthday',  value: '23 Jun 2000' },
    { label: 'Phone',     value: phone },
    { label: 'Email',     value: email },
    { label: 'Location',  value: profile.location },
  ];

  return (
    <section id="sobremi" className="py-20 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="About Me" />

        {/* Bio */}
        <div className="md:flex md:items-center gap-10 mb-14">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
            className="flex justify-center mb-8 md:mb-0"
          >
            <Avatar src={profile.photoUrl} alt={profile.displayName} size="200px" />
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
          >
            {profile.bio.map((p, i) => (
              <p key={i} className="text-base mb-4" style={{ color: 'var(--text-primary)' }}>
                {i === 0 && (
                  <span className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
                    Hi, I'm {profile.displayName}.{' '}
                  </span>
                )}
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Technical Specializations */}
        <motion.div
          className="mb-14"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
        >
          <h3
            className="text-xl font-bold uppercase mb-6 text-center"
            style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
          >
            Technical Specializations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, i) => (
              <motion.div
                key={spec.title}
                className="rounded-xl p-5 border border-[var(--border)]"
                style={{ background: 'var(--bg-card)' }}
                variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.5 + 4} viewport={{ once: true }}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--border)' }}
                  >
                    <i className={`${spec.icon} text-[var(--accent)]`} />
                  </div>
                  <h4 className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {spec.title}
                  </h4>
                </div>
                <ul className="space-y-1">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)' }} className="shrink-0 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal info + Interests */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Info card */}
          <motion.div
            className="rounded-xl p-6 border border-[var(--border)] w-full md:w-1/2"
            style={{ background: 'var(--bg-card)' }}
            variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
          >
            <h3
              className="text-xl font-bold uppercase mb-4"
              style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
            >
              Personal Info
            </h3>
            <ul className="space-y-3">
              {personalInfo.map((item) => (
                <InfoItem key={item.label} label={item.label} value={item.value} />
              ))}
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            className="w-full md:w-1/2"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}
          >
            <h3
              className="text-xl font-bold uppercase mb-4 text-center md:text-left"
              style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
            >
              Interests
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {interests.map((item) => (
                <motion.div
                  key={item.name}
                  className="interest-card"
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <i className={item.icon} />
                  <span className="text-[10px] mt-1">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CV Download */}
        <motion.div
          className="flex justify-center mt-10"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}
        >
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="cv-button rounded-md font-semibold"
          >
            <span>
              Download CV <i className="fa-solid fa-download ml-2" />
            </span>
            <div className="overlay" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
