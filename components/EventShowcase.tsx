'use client';

import { useUser } from "@clerk/nextjs";
import events, { Tier } from "@/data/events";
import EventCard from "./EventCard";

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

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      <p className="mb-6 text-center">
        Showing events for tier: <span className="font-medium">{tier}</span>
      </p>
      <ul className="grid gap-4">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard
              title={event.title}
              description={event.description}
              event_date={event.event_date}
              image_url={event.image_url}
              tier={event.tier}
              locked={tierRank[event.tier] > tierRank[tier]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
