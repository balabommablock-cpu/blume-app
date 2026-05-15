# blume-app

Rishabh Balabomma's working-note application page for the Blume Growth
Investments seat (hiring manager: Vikram Gawande).

Lives at **boredfolio.com/blume** via a rewrite from the parent
boredfolio site. This repo is a standalone Next.js app with
`basePath: '/blume'`, deployed as its own Vercel project.

## Local dev

```
npm install
npm run dev
open http://localhost:3000/blume
```

## Deployment

Deployed as a Vercel project. The parent
[boredfolio site](https://boredfolio.com) rewrites `/blume/:path*` to
this project's URL, so the production URL is **boredfolio.com/blume**.

## Structure

- `app/page.tsx` — the page (served at `/blume`)
- `app/_data.ts` — every visible string
- `app/_components/CopyButton.tsx` — client-side prompt copy
- `app/globals.css` — Cassie-style design system

Edit copy in `_data.ts`. Edit structure in `page.tsx`.
