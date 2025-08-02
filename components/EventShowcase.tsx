'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import type { Event, Tier } from '@/data/events';
import { getEventsForTier } from '@/lib/events';
import EventCard from '@/components/EventCard';
import EventCardSkeleton from '@/components/EventCardSkeleton';
import ErrorMessage from '@/components/ErrorMessage';

const tierRank: Record<Tier, number> = {
  Free: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
};

export default function EventShowcase() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tier: Tier =
    (isSignedIn ? (user?.publicMetadata?.tier as Tier) : undefined) ?? 'Free';

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await getEventsForTier(tierRank[tier]);
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchEvents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, tier]);

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchEvents} />;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      <p className="mb-6 text-center">
        Showing events for tier: <span className="font-medium">{tier}</span>
      </p>
      <ul className="grid gap-4">
        {loading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <EventCardSkeleton key={idx} />
          ))
        ) : events.length ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <li>No events available for your tier.</li>
        )}
      </ul>
    </div>
  );
}

