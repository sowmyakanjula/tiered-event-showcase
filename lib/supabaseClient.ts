import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Create the Supabase client only when credentials are provided. This avoids
// runtime errors during tests or local demos where environment variables might
// be missing.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

