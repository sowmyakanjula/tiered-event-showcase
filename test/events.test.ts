import events, { Tier } from '../data/events';

describe('events data', () => {
  const tiers: Tier[] = ['Free', 'Silver', 'Gold', 'Platinum'];

  it('contains six events', () => {
    expect(events).toHaveLength(6);
  });

  it('only uses valid tiers', () => {
    for (const event of events) {
      expect(tiers).toContain(event.tier);
    }
  });
});
