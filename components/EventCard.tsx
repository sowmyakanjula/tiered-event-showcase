import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Event, Tier } from '@/data/events';

const tierOrder: Tier[] = ['free', 'silver', 'gold', 'platinum'];

interface EventCardProps {
  event: Event;
  userTier: Tier;
}

const EventCard: FC<EventCardProps> = ({ event, userTier }) => {
  const date = new Date(event.event_date).toLocaleDateString();
  const tierLabel = event.tier.charAt(0).toUpperCase() + event.tier.slice(1);
  const isLocked = tierOrder.indexOf(event.tier) > tierOrder.indexOf(userTier);
  const description = event.description
    ? event.description.length > 100
      ? event.description.slice(0, 100) + '...'
      : event.description
    : '';

  return (
    <div className="relative overflow-hidden rounded border shadow-sm bg-background">
      <Image
        src={event.image_url || '/file.svg'}
        alt={event.title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
        <p className="text-xs mb-1 text-gray-500">{date}</p>
        {description && (
          <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{description}</p>
        )}
        <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
          {tierLabel} tier
        </span>
      </div>
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur">
          <Link
            href="/upgrade"
            className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Upgrade
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventCard;
