-- Supabase row level security for events
-- enable RLS and define tier-based select policy

-- Ensure row level security is on for the events table
alter table public.events enable row level security;

-- Helper function to rank tiers for comparison
create or replace function public.tier_rank(t text)
returns int as $$
  select case t
    when 'free' then 1
    when 'silver' then 2
    when 'gold' then 3
    when 'platinum' then 4
    else 0
  end;
$$ language sql immutable;

-- Policy allowing users to see events at or below their tier
create policy tier_based_select
on public.events
for select
using (
  tier_rank(tier) <= tier_rank(coalesce(auth.jwt() ->> 'tier', 'free'))
);
