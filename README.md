# Light It Red

NC State sports fan site. Next.js (App Router) + TypeScript, plain CSS. Live at
[lightitred.com](https://lightitred.com), hosted on Vercel — replaced the GoDaddy Websites +
Marketing plan (cancelled).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content to fill in

All placeholder copy is bracketed like `[this]` — search the `app/` folder for `[` to find
every spot that still needs real text:

- `app/page.tsx` — homepage intro + the three topic cards
- `app/about/page.tsx` — your name and bio
- `app/contact/page.tsx` — the intro line above the form

## Contact form

Wired up to Formspree (`app/contact/page.tsx`, `FORM_ACTION`) — submissions deliver to the
email you set up at formspree.io/forms. Free tier caps at 50 submissions/month.

## Deployment

Auto-deploys from `main` on [github.com/kzshaft/light-it-red](https://github.com/kzshaft/light-it-red)
to the `light-it-red` project in the BYGC Vercel team. Push to `main` to ship a change.
