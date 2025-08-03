import { auth as realAuth } from '@clerk/nextjs/server';

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.CLERK_PUBLISHABLE_KEY;

const enabled = Boolean(publishableKey);

export const auth = enabled ? realAuth : () => ({ userId: null });

export const clerkEnabled = enabled;

