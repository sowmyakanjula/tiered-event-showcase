import assert from 'node:assert';
import events, { Tier } from '../data/events';

const tiers: Tier[] = ['Free', 'Silver', 'Gold', 'Platinum'];

assert.strictEqual(events.length, 6, 'expected six events');

for (const event of events) {
  assert.ok(tiers.includes(event.tier), `invalid tier for event ${event.id}`);
}

console.log('All tests passed');
