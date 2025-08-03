# Tiered Event Showcase

Next.js 14 demo that showcases how event access changes based on a user's
subscription tier. Authentication is handled by Clerk and event data lives in
Supabase.

## Live Demo

[https://tiered-event-showcase.vercel.app](https://tiered-event-showcase.vercel.app)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables** – create a `.env.local` file with the following
   entries:

   | Variable                          | Description                                |
   | --------------------------------- | ------------------------------------------ |
   | `NEXT_PUBLIC_SUPABASE_URL`        | URL of your Supabase project               |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | Supabase anonymous key                     |
   | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for the frontend   |
   | `CLERK_SECRET_KEY`                | Clerk secret key used on the server        |

3. **Supabase database** – with the
   [Supabase CLI](https://supabase.com/docs/guides/cli), run:

   ```bash
   supabase start
   supabase db reset
   supabase db seed --file supabase/seed.sql
   ```

4. **Start the app**

   ```bash
   npm run dev
   ```

## Demo Credentials

Use the following accounts to preview each tier:

| Tier      | Email                 | Password |
| --------- | --------------------- | -------- |
| Free      | `free@example.com`    | `password` |
| Silver    | `silver@example.com`  | `password` |
| Gold      | `gold@example.com`    | `password` |
| Platinum  | `platinum@example.com`| `password` |

## Seeding

Sample events are defined in `supabase/seed.sql`. Run the seed command above to
populate your local database.

## Scripts

- `npm test` – run unit tests
- `npm run lint` – lint the codebase

