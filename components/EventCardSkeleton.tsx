'use client';

export default function EventCardSkeleton() {
  return (
    <li className="p-4 border rounded shadow-sm bg-background animate-pulse">
      <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
    </li>
  );
}

