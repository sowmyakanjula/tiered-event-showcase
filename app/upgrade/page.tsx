'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import type { Tier } from '@/data/events';

const tiers: Tier[] = ['free', 'silver', 'gold', 'platinum'];

export default function UpgradePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const currentTier = ((user?.publicMetadata?.tier as string) || 'free') as Tier;
  const [tier, setTier] = useState<Tier>(currentTier);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpgrade = async () => {
    if (!user) return;
    try {
      setLoading(true);
      setError(null);
      await user.update({ publicMetadata: { tier } });
      router.push('/events');
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return <Spinner />;
  }

  if (!isSignedIn) {
    router.push('/sign-in?redirect_url=/upgrade');
    return null;
  }

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Upgrade Tier</h1>
      {error && <ErrorMessage message={error} />}
      <label className="block mb-4">
        <span className="block mb-2">Select Tier</span>
        <select
          value={tier}
          onChange={(e) => setTier(e.target.value as Tier)}
          className="border p-2 rounded w-full"
        >
          {tiers.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </label>
      <button
        onClick={handleUpgrade}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {loading ? 'Upgrading...' : 'Upgrade'}
      </button>
    </div>
  );
}

