'use client';

import { Tier } from '@/data/events';

interface TierBadgeProps {
  tier: Tier;
}

const tierStyles: Record<Tier, string> = {
  Free: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  Silver: 'bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-slate-100',
  Gold: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100',
  Platinum:
    'bg-purple-200 text-purple-800 dark:bg-purple-600 dark:text-purple-100',
};

export default function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span className={`text-xs px-2 py-1 rounded ${tierStyles[tier]}`}>
      {tier} tier
    </span>
  );
}

