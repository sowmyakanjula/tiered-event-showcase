import { FC } from 'react';
import { Event } from '@/data/events';
import TierBadge from './TierBadge';

const EventCard: FC<{ event: Event }> = ({ event }) => {
  const date = new Date(event.event_date).toLocaleDateString();

  return (
    <div className="p-4 border rounded shadow-sm bg-background">
      <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
      <p className="text-xs mb-1 text-gray-500">{date}</p>
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{event.description}</p>
      <TierBadge tier={event.tier} />
    </div>
  );
};

export default EventCard;

