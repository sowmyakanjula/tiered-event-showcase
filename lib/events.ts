import { supabase } from './supabaseClient';
import { Tier } from '@/data/events';

export async function getEventsForTier(userTier: Tier) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .lte('tier', userTier)
    .order('event_date', { ascending: true });
  return { data, error };
}
