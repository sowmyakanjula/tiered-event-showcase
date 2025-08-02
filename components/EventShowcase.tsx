'use client';

import { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import EventCard from '@/components/EventCard';
import { getEventsForTier } from '@/lib/events';

const tierRank: Record<string, number> = {
  Free: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
};

interface Event {
  id: number;
  name: string;
  description: string;
  tier: number;
}

export default function EventShowcase() {
  const { isLoaded: authLoaded, userId } = useAuth();
  const { user, isLoaded: userLoaded } = useUser();
  const router = useRouter();

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEvents = async () => {
    if (!user) return;
    const tierName = (user.publicMetadata?.tier as string) || 'Free';
    const userTier = tierRank[tierName] ?? 0;

    setLoading(true);
    setError(null);
    try {
      const data = await getEventsForTier(userTier);
      setEvents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoaded || !userLoaded) return;
    if (!userId) {
      router.push('/sign-in');
      return;
    }
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLoaded, userLoaded, userId]);

  if (!authLoaded || !userLoaded || loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={loadEvents} />;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      {events.length === 0 ? (
        <p className="text-center">No events available for your tier.</p>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

