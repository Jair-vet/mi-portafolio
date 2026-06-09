import React from 'react';
import { ProgressBar } from '../atoms/ProgressBar';
import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="skill mb-6">
    <div className="flex items-center gap-2 mb-2">
      {skill.icon && (
        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain flex-shrink-0" draggable={false} />
      )}
      <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
        {skill.name}
      </span>
    </div>
    <div className="barra-skill" style={{ width: '90%' }}>
      <ProgressBar percentage={skill.percentage} />
    </div>
  </div>
);
