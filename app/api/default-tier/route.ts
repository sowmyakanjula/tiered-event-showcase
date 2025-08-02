import { auth, clerkClient } from '@clerk/nextjs/server';

export async function POST() {
  const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { tier: 'Free' },
  });

  return Response.json({ tier: 'Free' });
}
