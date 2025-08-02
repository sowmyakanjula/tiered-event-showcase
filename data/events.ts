export type Tier = 'Free' | 'Silver' | 'Gold' | 'Platinum';

export interface Event {
  id: number;
  name: string;
  description: string;
  tier: Tier;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Community Meetup',
    description: 'Meet fellow members at our free meetup.',
    tier: 'Free',
  },
  {
    id: 2,
    name: 'Silver Webinar',
    description: 'Exclusive webinar for Silver members.',
    tier: 'Silver',
  },
  {
    id: 3,
    name: 'Gold Hackathon',
    description: 'Join our 24h hackathon and win prizes.',
    tier: 'Gold',
  },
  {
    id: 4,
    name: 'Platinum Retreat',
    description: 'A weekend retreat for our Platinum members.',
    tier: 'Platinum',
  },
  {
    id: 5,
    name: 'All Hands Q&A',
    description: 'Monthly Q&A open for all tiers.',
    tier: 'Free',
  },
  {
    id: 6,
    name: 'Gold+ Networking Night',
    description: 'Networking event for Gold and Platinum.',
    tier: 'Gold',
  },
];

export const tierRank: Record<Tier, number> = {
  Free: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
};

export function getEventsForTier(tier: Tier): {
  events: Event[];
  error: string | null;
} {
  try {
    if (!(tier in tierRank)) {
      throw new Error(`Invalid tier: ${tier}`);
    }
    const filtered = events.filter(
      (event) => tierRank[event.tier] <= tierRank[tier]
    );
    return { events: filtered, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { events: [], error: message };
  }
}

export default events;
