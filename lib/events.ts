import { supabase } from './supabaseClient';

export async function getAllEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true });
  return { data, error };
}

