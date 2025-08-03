import { supabase } from './supabaseClient';
import eventsData, { Tier } from '@/data/events';

// Order tiers so we can compare access levels when falling back to local data.
const tierOrder: Tier[] = ['free', 'silver', 'gold', 'platinum'];

export async function getEventsForTier(userTier: Tier) {
  if (!supabase) {
    const idx = tierOrder.indexOf(userTier);
    const data = eventsData.filter(
      (e) => tierOrder.indexOf(e.tier) <= idx,
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
