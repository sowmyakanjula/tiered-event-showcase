'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUser, UserButton, SignOutButton } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/file.svg" alt="Event Showcase logo" width={32} height={32} />
        <span className="font-semibold">Event Showcase</span>
      </Link>
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/upgrade" className="hover:underline">
              Upgrade
            </Link>
            <UserButton appearance={{ elements: { avatarBox: 'h-8 w-8' } }} />
            <SignOutButton>
              <button className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                Sign out
              </button>
            </SignOutButton>
          </>
        ) : (
          <>
            <Link href="/sign-in" className="hover:underline">
              Sign in
            </Link>
            <Link href="/sign-up" className="hover:underline">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

