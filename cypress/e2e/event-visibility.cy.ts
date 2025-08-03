import events, { Tier } from '../../data/events';

const tierRank: Record<Tier, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
};

function visibleEvents(tier: Tier) {
  const rank = tierRank[tier];
  return events.filter((e) => tierRank[e.tier] <= rank).map((e) => e.title);
}

describe('event visibility per tier', () => {
  it('only shows free events to free users', () => {
    expect(visibleEvents('free')).to.deep.equal([
      'Community Meetup',
      'All Hands Q&A',
    ]);
  });

  it('includes gold events for gold users but not platinum', () => {
    const names = visibleEvents('gold');
    expect(names).to.include('Gold Hackathon');
    expect(names).not.to.include('Platinum Retreat');
  });
});
