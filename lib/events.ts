const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getEventsForTier(userTier: number) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase configuration');
  }

  const queryUrl = `${supabaseUrl}/rest/v1/events?select=*&tier=lte.${userTier}&order=event_date.asc`;

  const res = await fetch(queryUrl, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(`Supabase error: ${res.status} ${message}`);
  }

  return res.json();
}

