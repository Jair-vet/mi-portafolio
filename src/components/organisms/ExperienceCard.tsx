import React from 'react';
import { ToolBadgeList } from '../molecules/ToolBadgeList';
import type { WorkExperience } from '../../types';

interface ExperienceCardProps {
  exp: WorkExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
  <div
    className="flex-shrink-0 w-[400px] rounded-xl p-6 flex flex-col gap-4 shadow-xl border border-[var(--border)]"
    style={{ background: 'var(--bg-card)', borderLeft: '4px solid var(--accent)' }}
  >
    {/* Header */}
    <div>
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
          {exp.role}
        </h3>
        <span
          className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
          style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid var(--border)' }}
        >
          {exp.dateStart} – {exp.dateEnd}
        </span>
      </div>
      <p className="text-sm font-semibold mt-1" style={{ color: 'var(--accent)' }}>
        {exp.company}
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
        {exp.description}
      </p>
    </div>

    {/* Responsibilities */}
    <ul className="space-y-1.5 flex-grow">
      {exp.responsibilities.slice(0, 4).map((r, i) => (
        <li key={i} className="flex gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">▸</span>
          <span>{r}</span>
        </li>
      ))}
    </ul>

    {/* Tools */}
    <ToolBadgeList tools={exp.tools} />
  </div>
);
