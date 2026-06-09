import React from 'react';

interface InfoItemProps {
  label: string;
  value: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <li className="flex items-center text-sm" style={{ color: 'var(--text-primary)' }}>
    <strong
      className="font-semibold inline-block w-28 text-[var(--accent)] shrink-0"
    >
      {label}
    </strong>
    <span className="selectable">{value}</span>
  </li>
);
