// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// This project defaults to a Cloudflare Workers build (Lovable's hosting).
// To build for Netlify instead — e.g. `NITRO_PRESET=netlify npm run build` —
// set NITRO_PRESET and nitro will emit a Netlify Functions-shaped output
// under .output/ instead of the Cloudflare one. See DEPLOY_NETLIFY.md for
// the full walkthrough. Leave NITRO_PRESET unset to keep building for
// Cloudflare as before — this only changes behavior when it's explicitly set.
const nitroPreset = process.env["NITRO_PRESET"];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(nitroPreset ? { nitro: { preset: nitroPreset } } : {}),
});
