# Kilkenny SME redesign lab

Phase 1–3 research is preserved in `research/` and is not served by the app. Phase 4 adds one isolated, unofficial Yvonne Ross Jewellery redesign concept.

## Run locally in the cloud workspace

```bash
npm install
npm run dev
```

Open `/demos/yvonne-ross`. Run `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` for verification. Playwright uses a system Chromium when available; otherwise install a Playwright Chromium browser first. The project is structured as a standard Next.js root app for a future Vercel import, but deployment is intentionally out of scope.

The contact form is demo-only and sends no messages. The map needs browser access to OpenStreetMap tiles. See `docs/` for verified facts, conflicts, image rights, review integration, map policy, media slots, events, and design rationale.
