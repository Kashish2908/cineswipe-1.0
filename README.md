This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Roadmap

CineSwipe is built in small slices. Each one ends with something working and deployed.

### Slice 1: Movie grid (days 1-2)
- [x] Create the Next.js app and deploy it to Vercel
- [ ] Add an API route that fetches popular movies from TMDB
- [ ] Show a grid of real posters

**Result:** a live URL

### Slice 2: Swipe deck (days 3-5)
- [ ] Swipe deck with Like and Skip
- [ ] Save decisions in `localStorage`

**Result:** you can swipe through real movies

### Slice 3: History and Discover (week 2)
- [ ] History page: list of past decisions, with the option to change them
- [ ] Discover feed with genre filter
- [ ] Calculate taste from history ("For you" ranking)

**Result:** a complete single-player app

### Slice 4: Accounts and saved swipes (week 3)
- [ ] Supabase login
- [ ] Move swipes from `localStorage` to a `swipes` table
- [ ] Row-level security so users only see their own data

**Result:** your data survives reloads and devices

### Slice 5: Rooms (week 4)
- [ ] Create a room and share an invite link
- [ ] Both people swipe the same deck
- [ ] Matches appear live with Supabase Realtime

**Result:** the core feature works end to end

### Slice 6: Polish (week 5)
- [ ] Shareable match card
- [ ] README with screenshots
- [ ] Final deploy

**Result:** ready to show

### Optional
- [ ] AI-built deck
- [ ] Reactions
- [ ] Haptics on swipe