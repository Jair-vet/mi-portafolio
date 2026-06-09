import React, { useState } from 'react';
import { orbitIcons } from '../../data/orbitIcons';
import { profile } from '../../data/profile';

interface TooltipState { label: string; x: number; y: number }

export const TechOrbit: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const showTooltip = (e: React.MouseEvent, label: string) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ label, x: r.left + r.width / 2, y: r.top });
  };

  return (
    <>
      <div className="background-circle">
        {/* Photo fills the full circle */}
        <img
          src={profile.photoUrl}
          alt={profile.displayName}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          draggable={false}
        />

        {/* Ticker overlaid near the bottom of the circle */}
        <div className="tech-ticker">
          <div className="tech-ticker-track">
            {[...orbitIcons, ...orbitIcons].map((icon, i) => (
              <span
                key={i}
                className="tech-ticker-item"
                onMouseEnter={(e) => showTooltip(e, icon.alt)}
                onMouseLeave={() => setTooltip(null)}
              >
                <img src={icon.src} alt={icon.alt} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip — rendered outside overflow containers */}
      {tooltip && (
        <div
          className="fixed pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y - 10, transform: 'translate(-50%, -100%)', zIndex: 9999 }}
        >
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xl border border-[var(--border)] whitespace-nowrap"
            style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
          >
            {tooltip.label}
          </div>
        </div>
      )}
    </>
  );
};
