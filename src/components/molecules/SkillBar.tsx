import React from 'react';
import { ProgressBar } from '../atoms/ProgressBar';
import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="skill mb-6">
    <span
      className="block mb-2 font-semibold text-sm"
      style={{ color: 'var(--text-primary)' }}
    >
      {skill.name}
    </span>
    <div className="barra-skill" style={{ width: '90%' }}>
      <ProgressBar percentage={skill.percentage} />
    </div>
  </div>
);
