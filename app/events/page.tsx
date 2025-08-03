'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import EventCard from '@/components/EventCard';
import { Event, Tier } from '@/data/events';
import { getEventsForTier } from '@/lib/events';

export default function EventsPage() {
  const { isLoaded, sessionClaims } = useAuth();

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setError(null);
      setLoading(true);
      const tierName = ((sessionClaims?.publicMetadata?.tier as string) || 'free').toLowerCase();
      const { data, error } = await getEventsForTier(tierName as Tier);
      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoaded) return;
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchEvents} />;
  }

  if (!events.length) {
    return <p className="p-4 text-center">No events available for your tier.</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
