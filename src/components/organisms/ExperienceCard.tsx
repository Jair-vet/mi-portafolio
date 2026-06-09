import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolBadgeList } from '../molecules/ToolBadgeList';
import type { WorkExperience } from '../../types';

interface ExperienceCardProps {
  exp: WorkExperience;
}

const PREVIEW = 3;

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = exp.responsibilities.slice(0, PREVIEW);
  const extra   = exp.responsibilities.slice(PREVIEW);

  return (
    <div
      className="flex-shrink-0 w-[400px] rounded-xl p-5 flex flex-col gap-3 shadow-xl border border-[var(--border)]"
      style={{ background: 'var(--bg-card)', borderLeft: '4px solid var(--accent)' }}
    >
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h3 className="text-base font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
            {exp.role}
          </h3>
          <span
            className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid var(--border)' }}
          >
            {exp.dateStart} – {exp.dateEnd}
          </span>
        </div>
        <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--accent)' }}>
          {exp.company}
        </p>
        <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
          {exp.description}
        </p>
      </div>

      {/* Always-visible responsibilities */}
      <ul className="space-y-1">
        {preview.map((r, i) => (
          <li key={i} className="flex gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">▸</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>

      {/* Expandable extra responsibilities */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            className="space-y-1 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {extra.map((r, i) => (
              <li key={i} className="flex gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">▸</span>
                <span>{r}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-auto pt-1 flex flex-col gap-2">
        {extra.length > 0 && (
          <button
            className="self-start flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
            onClick={() => setExpanded((v) => !v)}
          >
            <i className={`fa-solid fa-${expanded ? 'chevron-up' : 'info-circle'} text-[10px]`} />
            {expanded ? 'Ver menos' : `+${extra.length} más`}
          </button>
        )}
        <ToolBadgeList tools={exp.tools} />
      </div>
    </div>
  );
};
