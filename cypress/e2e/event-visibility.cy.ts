import events, { Tier } from '../../data/events';

const tierRank: Record<Tier, number> = {
  Free: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
};

function visibleEvents(tier: Tier) {
  const rank = tierRank[tier];
  return events.filter((e) => tierRank[e.tier] <= rank).map((e) => e.name);
}

describe('event visibility per tier', () => {
  it('only shows free events to free users', () => {
    expect(visibleEvents('Free')).to.deep.equal([
      'Community Meetup',
      'All Hands Q&A',
    ]);
  });

  it('includes gold events for gold users but not platinum', () => {
    const names = visibleEvents('Gold');
    expect(names).to.include('Gold Hackathon');
    expect(names).not.to.include('Platinum Retreat');
  });
});
