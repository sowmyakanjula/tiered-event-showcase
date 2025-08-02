'use client';

import { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

export default function EventsError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorMessage message={error.message} onRetry={reset} />;
}
