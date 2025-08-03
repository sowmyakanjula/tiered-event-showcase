export type Tier = 'free' | 'silver' | 'gold' | 'platinum';

export interface Event {
  id: string;
  title: string;
  description?: string;
  event_date: string;
  image_url?: string;
  tier: Tier;
}

const events: Event[] = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    title: 'Community Meetup',
    description: 'Meet fellow members at our free meetup.',
    event_date: '2025-09-01',
    image_url: 'https://example.com/images/free1.jpg',
    tier: 'free',
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    title: 'Silver Webinar',
    description: 'Exclusive webinar for silver members.',
    event_date: '2025-10-05',
    image_url: 'https://example.com/images/silver1.jpg',
    tier: 'silver',
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    title: 'Gold Hackathon',
    description: 'Join our 24h hackathon and win prizes.',
    event_date: '2025-11-10',
    image_url: 'https://example.com/images/gold1.jpg',
    tier: 'gold',
  },
  {
    id: '00000000-0000-0000-0000-000000000004',
    title: 'Platinum Retreat',
    description: 'A weekend retreat for our platinum members.',
    event_date: '2025-12-05',
    image_url: 'https://example.com/images/platinum1.jpg',
    tier: 'platinum',
  },
  {
    id: '00000000-0000-0000-0000-000000000005',
    title: 'All Hands Q&A',
    description: 'Monthly Q&A open for all tiers.',
    event_date: '2025-09-20',
    image_url: 'https://example.com/images/free2.jpg',
    tier: 'free',
  },
  {
    id: '00000000-0000-0000-0000-000000000006',
    title: 'Gold+ Networking Night',
    description: 'Networking event for gold and platinum.',
    event_date: '2025-11-25',
    image_url: 'https://example.com/images/gold2.jpg',
    tier: 'gold',
  },
];

export default events;
