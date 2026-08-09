# Deploying the Live Leaderboard (bot API ↔ website)

The website's `/leaderboard` page and homepage stats strip need TWO things
running, in this order. Skipping either step is why you see "Live data is
offline" on the deployed site.

## Step 1 — Host the bot's public API somewhere reachable over HTTPS

The API (`src/api/server.js`) is a separate process from the Discord bot
itself — it does NOT need your bot token, only read access to the same
MongoDB the bot uses.

```
npm run api
```

This listens on `API_PORT` (default 3001) and needs, at minimum:

```
MONGO_URI=<same mongo uri the bot uses>
API_ALLOWED_ORIGINS=https://<your-deployed-website-domain>
```

It must be reachable at a public `https://` address — a `localhost` URL
only works on the machine it's running on, which is meaningless to a
visitor's browser. Common ways to get a public HTTPS address:
- A small VPS/box with a reverse proxy (nginx/Caddy) + a domain/subdomain
- A Cloudflare Tunnel pointed at the process
- Any Node hosting platform that gives you a public URL (Render, Railway,
  Fly.io, etc.) — just make sure `MONGO_URI` points at your real database

Verify it's actually up before moving to step 2:
```
curl https://api.yourdomain.com/api/health
# should return {"ok":true}
```

## Step 2 — Point the website's build at that URL

The website reads `VITE_BUBBLE_API_URL` — but Vite bakes this into the
browser bundle AT BUILD TIME, not at runtime. A local `.env` file does
nothing for a deployed site; you must set it wherever the site is actually
built/deployed:

- **This project deploys via Lovable** (see AGENTS.md) — set
  `VITE_BUBBLE_API_URL` as an environment variable in the Lovable project's
  settings, then trigger a rebuild. Local `.env` files are only for
  `npm run dev`/`npm run build` on your own machine.
- If you ever move off Lovable to raw Cloudflare Pages, Vercel, Netlify,
  etc., set the same variable in that platform's environment variable
  settings instead.

```
VITE_BUBBLE_API_URL=https://api.yourdomain.com
```

## How to tell which step is broken

The leaderboard page's error box is self-diagnosing — read it, don't guess:

| Message | Meaning | Fix |
|---|---|---|
| "No live API origin is configured" | `VITE_BUBBLE_API_URL` was empty at build time | Step 2 |
| "...is a localhost address..." | It's set, but to `localhost`/`127.0.0.1` | Step 2 — use the real public URL from Step 1 |
| "unreachable from your browser...offline, or...CORS" | The URL is public-looking but nothing answered, or `API_ALLOWED_ORIGINS` on the bot doesn't include this site's origin | Step 1 — check the API process is actually running and `API_ALLOWED_ORIGINS` matches |
| "replied with 5xx" | API is up but erroring (likely MongoDB unreachable from the API process) | Check the API process's own logs / `MONGO_URI` |

## Quick end-to-end check once both are live

```
curl https://api.yourdomain.com/api/public/stats
```
should return real JSON. Then open the deployed website's `/leaderboard` —
it polls automatically, no redeploy needed once both sides are correctly
pointed at each other.
