import { Tier } from '@/data/events';

const tierStyles: Record<Tier, string> = {
  free: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  silver: 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200',
  gold: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100',
  platinum: 'bg-indigo-200 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-100',
};

export default function TierBadge({ tier }: { tier: Tier }) {
  const label = tier.charAt(0).toUpperCase() + tier.slice(1);
  return (
    <span className={`text-xs px-2 py-1 rounded ${tierStyles[tier]}`}>
      {label} tier
    </span>
  );
}

