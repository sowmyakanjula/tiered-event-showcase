'use client';

import { useUser } from "@clerk/nextjs";
import events, { Tier } from "@/data/events";

const tierRank: Record<Tier, number> = {
  Free: 0,
  Silver: 1,
  Gold: 2,
  Platinum: 3,
};

export default function EventShowcase() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="p-4 max-w-2xl mx-auto">Loading events...</div>;
  }

  const tier: Tier =
    (isSignedIn ? (user?.publicMetadata?.tier as Tier) : undefined) ?? "Free";

  const filtered = events.filter(
    (event) => tierRank[event.tier] <= tierRank[tier]
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      <p className="mb-6 text-center">
        Showing events for tier: <span className="font-medium">{tier}</span>
      </p>
      <ul className="grid gap-4">
        {filtered.length ? (
          filtered.map((event) => (
            <li
              key={event.id}
              className="p-4 border rounded shadow-sm bg-background"
            >
              <h2 className="text-lg font-semibold mb-1">{event.name}</h2>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
              <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
                {event.tier} tier
              </span>
            </li>
          ))
        ) : (
          <li>No events available for your tier.</li>
        )}
      </ul>
    </div>
  );
}
