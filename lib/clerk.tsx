import type { PropsWithChildren } from 'react';
import {
  ClerkProvider as RealClerkProvider,
  SignIn as RealSignIn,
  SignUp as RealSignUp,
  SignOutButton as RealSignOutButton,
  UserButton as RealUserButton,
  useAuth as realUseAuth,
  useUser as realUseUser,
} from '@clerk/nextjs';

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.CLERK_PUBLISHABLE_KEY;

const enabled = Boolean(publishableKey);

export function ClerkProvider({ children }: PropsWithChildren) {
  if (!enabled) {
    return <>{children}</>;
  }
  return (
    <RealClerkProvider publishableKey={publishableKey!}>
      {children}
    </RealClerkProvider>
  );
}

export const useAuth = enabled
  ? realUseAuth
  : () => ({ isLoaded: true, isSignedIn: false } as const);

export const useUser = enabled
  ? realUseUser
  : () => ({ isLoaded: true, isSignedIn: false, user: undefined } as const);

export const UserButton = enabled ? RealUserButton : () => null;

export const SignOutButton = enabled
  ? RealSignOutButton
  : ({ children }: PropsWithChildren) => <>{children}</>;

export const SignIn = enabled
  ? RealSignIn
  : () => <p>Sign-in unavailable</p>;

export const SignUp = enabled
  ? RealSignUp
  : () => <p>Sign-up unavailable</p>;

export const clerkEnabled = enabled;

