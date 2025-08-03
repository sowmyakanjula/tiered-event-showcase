import { FC } from 'react';

const EventCardSkeleton: FC = () => {
  return (
    <div className="p-4 border rounded shadow-sm bg-background animate-pulse">
      <div className="h-5 w-3/4 mb-2 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-3 w-1/2 mb-2 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-3 w-full mb-2 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  );
};

export default EventCardSkeleton;
