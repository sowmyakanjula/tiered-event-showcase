-- Supabase row level security for events
-- Enable RLS and define tier-based select policy

-- Ensure row level security is on for the events table
alter table public.events enable row level security;

-- Policy: Only allow users to select events at or below their tier
create policy tier_based_select
on public.events
for select
using (
  ((auth.jwt() ->> 'tier')::tier_enum >= tier)
);
