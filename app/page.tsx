import { auth } from '@/lib/clerkServer';
import { redirect } from 'next/navigation';

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect('/events');
  }

  redirect('/sign-in');
}

