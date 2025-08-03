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
  title text not null,
  description text,
  event_date timestamp not null,
  image_url text,
  tier tier_enum not null
);
