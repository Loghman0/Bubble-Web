# Deploying to Netlify — Step by Step

This project defaults to building for Cloudflare (its Lovable hosting
target). Two things in this repo make a Netlify deploy work correctly
instead: **`netlify.toml`** (tells Netlify how to build and where the
server function lives) and a **`NITRO_PRESET=netlify`** build-time variable
(tells the build to output a Netlify-shaped server instead of a
Cloudflare-shaped one). Both are already set up — you shouldn't need to
touch either file, just follow the steps below.

## 1. Push this repo to GitHub (or GitLab/Bitbucket)

Netlify deploys from a git repository, not a zip upload. If this code isn't
already in a repo you control:

```
cd website
git init
git add .
git commit -m "Initial commit"
```

Create an empty repo on GitHub, then:

```
git remote add origin https://github.com/<you>/<repo-name>.git
git branch -M main
git push -u origin main
```

## 2. Create the Netlify site

1. Go to [app.netlify.com](https://app.netlify.com) and log in (or sign up).
2. Click **Add new site → Import an existing project**.
3. Choose GitHub (or wherever you pushed the repo) and authorize Netlify if
   asked.
4. Select this repository.

## 3. Confirm the build settings

Netlify should auto-detect the settings from `netlify.toml` in this repo:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

You don't need to type these in manually — just confirm they match before
clicking deploy. If Netlify shows different defaults, override them to
match the above.

## 4. Set the live-leaderboard environment variable (if you're using it)

If you want the `/leaderboard` page's live data to work, add this under
**Site settings → Environment variables** before deploying:

| Key | Value |
|---|---|
| `VITE_BUBBLE_API_URL` | `https://<your-bot-api-domain>` |

This is the same variable described in `DEPLOY_LIVE_API.md` — it has to be
a real public `https://` address the bot's API is reachable at, not
`localhost`. If you haven't deployed the bot's API anywhere yet, you can
skip this for now; the site will build and work fine, the leaderboard page
will just show its "not configured" message until you add this later (add
the variable, then trigger a redeploy — see step 6).

## 5. Deploy

Click **Deploy site**. Netlify will:
1. Clone the repo
2. Run `npm run build` with `NITRO_PRESET=netlify` (set automatically by
   `netlify.toml`, no action needed from you)
3. Publish the `dist` folder as static assets and wire up the SSR server as
   a Netlify Function

This takes a minute or two the first time. Netlify gives you a
`*.netlify.app` URL as soon as it finishes — open it and click around to
confirm pages load (including a page with server data, like `/fish`, to
confirm the SSR function itself is working, not just static assets).

## 6. Redeploying after changes

Any push to the connected branch triggers a new automatic build — nothing
extra to run. If you only changed an environment variable (like adding
`VITE_BUBBLE_API_URL` later), trigger a manual rebuild from **Deploys →
Trigger deploy → Deploy site**, since environment variables are baked in at
build time and won't apply retroactively to an already-built deploy.

## 7. Optional — custom domain

**Site settings → Domain management → Add a custom domain**, then follow
Netlify's instructions to point your domain's DNS at Netlify (either an
`A`/`ALIAS` record to their load balancer, or `CNAME` to your
`*.netlify.app` address, depending on whether it's an apex domain or
subdomain). Netlify provisions HTTPS automatically once DNS resolves.

## Troubleshooting

- **Build fails on `npm run build`** — check the deploy log's exact error.
  Most common cause is a missing/mismatched Node version; add a `.nvmrc` or
  set `NODE_VERSION` under Site settings → Environment variables if needed.
- **Site builds but pages 404 or show blank** — double check `netlify.toml`
  wasn't accidentally excluded from the repo (`git status` / `.gitignore`),
  since that's what tells Netlify about the Functions directory.
- **Leaderboard says "Live data is offline"** — see `DEPLOY_LIVE_API.md`;
  this is a separate, expected step (hosting the bot's API + setting
  `VITE_BUBBLE_API_URL`), not a Netlify-specific problem.
