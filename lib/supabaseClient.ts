import { createClient } from '@supabase/supabase-js';

// Only create a Supabase client when the required environment variables are
// defined.  In deployments where Supabase is not configured (for example,
// preview builds), this prevents the application from throwing a runtime error
// during module evaluation.  Callers can check for a `null` client and fall back
// to alternative data sources.
export const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      )
    : null;

