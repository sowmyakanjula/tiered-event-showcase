export type Tier = 'Free' | 'Silver' | 'Gold' | 'Platinum';

export interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: Tier;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Community Meetup',
    description: 'Meet fellow members at our free meetup.',
    event_date: '2025-06-01',
    image_url: 'https://via.placeholder.com/400x200?text=Community+Meetup',
    tier: 'Free',
  },
  {
    id: 2,
    title: 'Silver Webinar',
    description: 'Exclusive webinar for Silver members.',
    event_date: '2025-07-15',
    image_url: 'https://via.placeholder.com/400x200?text=Silver+Webinar',
    tier: 'Silver',
  },
  {
    id: 3,
    title: 'Gold Hackathon',
    description: 'Join our 24h hackathon and win prizes.',
    event_date: '2025-08-20',
    image_url: 'https://via.placeholder.com/400x200?text=Gold+Hackathon',
    tier: 'Gold',
  },
  {
    id: 4,
    title: 'Platinum Retreat',
    description: 'A weekend retreat for our Platinum members.',
    event_date: '2025-09-10',
    image_url: 'https://via.placeholder.com/400x200?text=Platinum+Retreat',
    tier: 'Platinum',
  },
  {
    id: 5,
    title: 'All Hands Q&A',
    description: 'Monthly Q&A open for all tiers.',
    event_date: '2025-05-05',
    image_url: 'https://via.placeholder.com/400x200?text=All+Hands+Q%26A',
    tier: 'Free',
  },
  {
    id: 6,
    title: 'Gold+ Networking Night',
    description: 'Networking event for Gold and Platinum.',
    event_date: '2025-10-01',
    image_url: 'https://via.placeholder.com/400x200?text=Networking+Night',
    tier: 'Gold',
  },
];

export default events;
