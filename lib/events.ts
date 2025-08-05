import { supabase } from './supabaseClient';
import events, { Tier, Event } from '@/data/events';

const tierOrder: Tier[] = ['free', 'silver', 'gold', 'platinum'];

// Fetch events for a given tier. If a Supabase client is not configured we
// fall back to the local mock data defined in `data/events.ts` so the app can
// still function during development or tests.
export async function getEventsForTier(userTier: Tier) {
  const allowedIndex = tierOrder.indexOf(userTier);
  const allowedTiers = tierOrder.slice(0, allowedIndex + 1);

  if (!supabase) {
    const data: Event[] = events
      .filter((event) => allowedTiers.includes(event.tier))
      .sort(
        (a, b) =>
          new Date(a.event_date).getTime() - new Date(b.event_date).getTime(),
      );
    return { data, error: null };
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .in('tier', allowedTiers)
    .order('event_date', { ascending: true });
  return { data, error };
}
