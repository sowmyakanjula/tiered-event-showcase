import { auth, currentUser, updateUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import type { Tier } from '@/data/events';

export default async function UpgradePage() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  const currentTier = (user.publicMetadata?.tier as Tier) ?? 'Free';
  const tiers: Tier[] = ['Free', 'Silver', 'Gold', 'Platinum'];

  async function upgradeTier(formData: FormData) {
    'use server';
    const tier = formData.get('tier') as Tier;
    const { userId } = auth();
    if (!userId) {
      redirect('/sign-in');
    }
    await updateUser(userId!, { publicMetadata: { tier } });
    redirect('/events');
  }

  return (
    <form action={upgradeTier} className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Upgrade Tier</h1>
      <select name="tier" defaultValue={currentTier} className="border rounded p-2">
        {tiers.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upgrade
      </button>
    </form>
  );
}
