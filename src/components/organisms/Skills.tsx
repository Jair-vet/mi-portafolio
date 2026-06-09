import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { SkillBar } from '../molecules/SkillBar';
import { technicalSkills, professionalSkills } from '../../data/skills';

export const Skills: React.FC = () => (
  <section id="skills" className="py-16 px-6" style={{ background: 'var(--bg-secondary)' }}>
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Skills" subtitle="Technical expertise" />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Technical Skills */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
          >
            Technical Skills
          </h3>
          {technicalSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Righteous', cursive", color: 'var(--text-primary)' }}
          >
            Professional Skills
          </h3>
          {professionalSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
