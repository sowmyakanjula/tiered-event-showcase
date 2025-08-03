import { FC } from 'react';
import { Tier } from '@/data/events';

const tierStyles: Record<Tier, string> = {
  free: 'bg-gray-200 text-gray-800',
  silver: 'bg-blue-100 text-blue-800',
  gold: 'bg-yellow-100 text-yellow-800',
  platinum: 'bg-purple-100 text-purple-800',
};

const TierBadge: FC<{ tier: Tier }> = ({ tier }) => {
  const label = tier.charAt(0).toUpperCase() + tier.slice(1);
  return (
    <span className={`text-xs px-2 py-1 rounded ${tierStyles[tier]}`}>
      {label} tier
    </span>
  );
};

export default TierBadge;
