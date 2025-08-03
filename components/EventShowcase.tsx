'use client';

import { useUser } from "@clerk/nextjs";
import events, { Tier } from "@/data/events";
import Spinner from "@/components/Spinner";

const tierRank: Record<Tier, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
};

export default function EventShowcase() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Spinner />;
  }

  const tier: Tier =
    (isSignedIn
      ? ((user?.publicMetadata?.tier as string)?.toLowerCase() as Tier)
      : undefined) ?? "free";

  const filtered = events.filter(
    (event) => tierRank[event.tier] <= tierRank[tier]
  );

  const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      <p className="mb-6 text-center">
        Showing events for tier: <span className="font-medium">{tierLabel}</span>
      </p>
      <ul className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.length ? (
          filtered.map((event) => {
            const label = event.tier.charAt(0).toUpperCase() + event.tier.slice(1);
            return (
              <li
                key={event.id}
                className="p-4 rounded-2xl shadow-md overflow-hidden bg-background"
              >
                <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
                <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
                  {label} tier
                </span>
              </li>
            );
          })
        ) : (
          <li>No events available for your tier.</li>
        )}
      </ul>
    </div>
  );
}
