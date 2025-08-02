-- Enable UUID extension for generating UUID v4 values
create extension if not exists "uuid-ossp";

-- Enum type to represent event tiers
create type tier_enum as enum (
  'free',
  'silver',
  'gold',
  'platinum'
);

-- Events table storing tiered events
create table events (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text not null,
  tier tier_enum not null,
  created_at timestamptz not null default now()
);
