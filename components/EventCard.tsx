import { FC } from 'react';
import { Event } from '@/data/events';

const EventCard: FC<{ event: Event }> = ({ event }) => {
  const date = new Date(event.event_date).toLocaleDateString();
  const tierLabel = event.tier.charAt(0).toUpperCase() + event.tier.slice(1);

  return (
    <div className="p-4 rounded-2xl shadow-md overflow-hidden bg-background">
      <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
      <p className="text-xs mb-1 text-gray-500">{date}</p>
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{event.description}</p>
      <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
        {tierLabel} tier
      </span>
    </div>
  );
};

export default EventCard;
