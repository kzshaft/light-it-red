# Light It Red

NC State sports fan site. Next.js (App Router) + TypeScript, plain CSS. Replacing the
GoDaddy Websites + Marketing plan for lightitred.com.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content to fill in

All placeholder copy is bracketed like `[this]` — search the `app/` folder for `[` to find
every spot that needs real text:

- `app/page.tsx` — homepage intro + the three topic cards
- `app/about/page.tsx` — your name and bio
- `app/contact/page.tsx` — the intro line above the form

## Contact form setup (required — form does nothing until you do this)

The contact form posts to Formspree, a free form-to-email service (no backend needed):

1. Go to https://formspree.io and sign up free (50 submissions/month free tier).
2. Create a new form, point it at the email you want submissions sent to.
3. Copy the form endpoint it gives you (looks like `https://formspree.io/f/abcd1234`).
4. In `app/contact/page.tsx`, replace `FORM_ACTION`'s placeholder URL with that endpoint.

## Deploying to Vercel

1. Push this folder to its own GitHub repo (not the Stockbridge repo).
2. In the Vercel dashboard, **Add New Project** → import that repo. Framework preset
   (Next.js) is auto-detected — no config needed.
3. Deploy. You'll get a `*.vercel.app` preview URL to sanity-check first.

## Pointing lightitred.com at Vercel

1. In the Vercel project → **Settings → Domains**, add `lightitred.com` (and `www.lightitred.com`
   if you want that too).
2. Vercel will show you DNS records to add (an `A` record for the apex domain, a `CNAME` for
   `www`).
3. In your GoDaddy account, go to the domain's **DNS** settings (not the Websites + Marketing
   product — the domain itself) and add those records.
4. Wait for DNS to propagate (usually minutes, can take a few hours), then confirm
   `lightitred.com` loads the new site.

## Cancelling the old plan

Once the domain is confirmed live on Vercel, cancel "Websites + Marketing Standard" in
GoDaddy **before** the 9/30/2026 renewal date. Do **not** cancel or touch the domain
registration itself — that's a separate product and stays with GoDaddy.
