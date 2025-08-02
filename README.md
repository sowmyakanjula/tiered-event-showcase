This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Architecture Overview

- **Next.js 14 (App Router)** – server-side rendering for authenticated routes and optional API routes for secure backend calls.
- **Clerk.dev** – client-side React hooks provide authentication with middleware safeguarding protected pages.
- **Supabase (PostgreSQL)** – events are stored in the `public` schema and secured with Row-Level Security (RLS) policies.
- **Tailwind CSS** – utility-first styling with built-in dark and light mode support.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Seeding

Sample event data is available in [`supabase/seed.sql`](supabase/seed.sql). It inserts two example events for each membership tier with titles, descriptions, dates, and image URLs. Run the seed with the [Supabase CLI](https://supabase.com/docs/guides/cli) after linking your project:

```bash
supabase db seed
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
