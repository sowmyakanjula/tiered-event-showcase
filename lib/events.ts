import { supabase } from './supabaseClient';
import events, { Tier, Event } from '@/data/events';

const tierOrder: Tier[] = ['free', 'silver', 'gold', 'platinum'];

// Fetch events for a given tier. If a Supabase client is not configured we
// fall back to the local mock data defined in `data/events.ts` so the app can
// still function during development or tests.
export async function getEventsForTier(userTier: Tier) {
  if (!supabase) {
    const allowedIndex = tierOrder.indexOf(userTier);
    const data: Event[] = events
      .filter((event) => tierOrder.indexOf(event.tier) <= allowedIndex)
      .sort(
        (a, b) =>
          new Date(a.event_date).getTime() - new Date(b.event_date).getTime(),
      );
    return { data, error: null };
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .lte('tier', userTier)
    .order('event_date', { ascending: true });
  return { data, error };
}
