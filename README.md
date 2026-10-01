# Kilkenny SME redesign lab

The `codex/redesign-yvonne-ross-v3` branch contains **The Light Studio**, a brighter and more welcoming version of the unofficial Yvonne Ross Jewellery concept. The darker **Future Atelier** V2 is preserved on `codex/redesign-yvonne-ross-v2`; V1 remains on `codex/redesign-yvonne-ross`. Phase 1–3 research is preserved in `research/` and never served by the app.

## Run locally

```bash
npm install
npm run dev
```

Open `/demos/yvonne-ross`. Verify with `npm run typecheck`, `npm run lint`, `npm run build`, and `npm test`. Playwright uses system Chromium where available. The public V3 showcase is [yvonne-ross-jewellery-v3.vercel.app](https://yvonne-ross-jewellery-v3.vercel.app/); the separate V2 showcase is [yvonne-ross-jewellery-concept.vercel.app](https://yvonne-ross-jewellery-concept.vercel.app/).

The form is demo-only and sends no message. The map uses OpenStreetMap tiles with attribution. Google rating falls back to a dated snapshot until server-side Places credentials are supplied. V2 and V3 use photographs and the logo from Yvonne Ross Jewellery's official site for private concept review. See `docs/yvonne-ross-official-media-register.md` for sources and the publication-rights caveat. See `docs/yvonne-ross-v3-design.md` for this version and `docs/yvonne-ross-v2-*` for earlier audit and QA.
