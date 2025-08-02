import { FC } from 'react';

export interface Event {
  id: number;
  name: string;
  description: string;
  tier: number;
  event_date?: string;
}

const tierLabels = ['Free', 'Silver', 'Gold', 'Platinum'];

const EventCard: FC<{ event: Event }> = ({ event }) => {
  const date = event.event_date ? new Date(event.event_date).toLocaleDateString() : null;

  return (
    <div className="p-4 border rounded shadow-sm bg-background">
      <h2 className="text-lg font-semibold mb-1">{event.name}</h2>
      {date && <p className="text-xs mb-1 text-gray-500">{date}</p>}
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{event.description}</p>
      <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
        {tierLabels[event.tier] || 'Unknown'} tier
      </span>
    </div>
  );
};

export default EventCard;
