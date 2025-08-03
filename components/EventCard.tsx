import { FC } from 'react';
import type { Tier } from '@/data/events';

export interface Event {
  id: number;
  name: string;
  description: string;
  tier: number | Tier;
  event_date?: string;
}

const tierLabels: Record<number, Tier> = {
  0: 'Free',
  1: 'Silver',
  2: 'Gold',
  3: 'Platinum',
};

const EventCard: FC<{ event: Event }> = ({ event }) => {
  const date = event.event_date
    ? new Date(event.event_date).toLocaleDateString()
    : null;

  const tier =
    typeof event.tier === 'number'
      ? tierLabels[event.tier] ?? 'Unknown'
      : event.tier;

  return (
    <div className="p-4 border rounded shadow-sm bg-background">
      <h2 className="text-lg font-semibold mb-1">{event.name}</h2>
      {date && <p className="text-xs mb-1 text-gray-500">{date}</p>}
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
        {event.description}
      </p>
      <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
        {tier} tier
      </span>
    </div>
  );
};

export default EventCard;
