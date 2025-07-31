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

export default events;
