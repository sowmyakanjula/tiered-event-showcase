'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Tier } from '@/data/events';

const tiers: Tier[] = ['silver', 'gold', 'platinum'];

export default function UpgradePage() {
  const { user } = useUser();
  const router = useRouter();
  const [tier, setTier] = useState<Tier>('silver');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpgrade = async () => {
    if (!user) return;
    try {
      setError(null);
      setLoading(true);
      await user.update({ publicMetadata: { tier } });
      router.push('/events');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Upgrade</h1>
      <select
        value={tier}
        onChange={(e) => setTier(e.target.value as Tier)}
        className="w-full border p-2 mb-4 rounded"
      >
        {tiers.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
      <button
        onClick={handleUpgrade}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Upgrading...' : 'Upgrade'}
      </button>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
}

