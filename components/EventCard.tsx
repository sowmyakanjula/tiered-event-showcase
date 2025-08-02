'use client';

import type { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <li className="p-4 border rounded shadow-sm bg-background">
      <h2 className="text-lg font-semibold mb-1">{event.name}</h2>
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
        {event.description}
      </p>
      <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
        {event.tier} tier
      </span>
    </li>
  );
}

