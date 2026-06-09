import React from 'react';
import { orbitIcons } from '../../data/orbitIcons';
import { Avatar } from '../atoms/Avatar';
import { profile } from '../../data/profile';

export const TechOrbit: React.FC = () => (
  <div className="background-circle">
    {/* Center avatar */}
    <div className="relative z-10">
      <Avatar src={profile.photoUrl} alt={profile.displayName} size="180px" />
    </div>

    {/* Orbit */}
    <div className="orbit-circle">
      {orbitIcons.map((icon, i) => (
        <span key={icon.alt} style={{ '--i': i } as React.CSSProperties}>
          <img src={icon.src} alt={icon.alt} />
        </span>
      ))}
    </div>
  </div>
);
