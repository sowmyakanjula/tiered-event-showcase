import React from 'react';
import { Tier } from "@/data/events";

interface EventCardProps {
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: Tier;
  locked?: boolean;
}

export default function EventCard({
  title,
  description,
  event_date,
  image_url,
  tier,
  locked = false,
}: EventCardProps) {
  return (
    <div className="relative border rounded overflow-hidden shadow-sm bg-background">
      <img
        src={image_url}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>
        <p className="text-xs mb-2">
          {new Date(event_date).toLocaleDateString()}
        </p>
        <span className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
          {tier} tier
        </span>
      </div>
      {locked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-white/60 dark:bg-black/60">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
            Upgrade
          </button>
        </div>
      )}
    </div>
  );
}
