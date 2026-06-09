import React from 'react';
import { Badge } from '../atoms/Badge';

interface ToolBadgeListProps {
  tools: string[];
  className?: string;
}

export const ToolBadgeList: React.FC<ToolBadgeListProps> = ({ tools, className = '' }) => (
  <div className={`flex flex-wrap gap-1.5 ${className}`}>
    {tools.map((tool) => (
      <Badge key={tool} label={tool} />
    ))}
  </div>
);
