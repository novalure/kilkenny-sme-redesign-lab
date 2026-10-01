# Kilkenny SME redesign lab

The `codex/redesign-yvonne-ross-v3` branch contains an editorial, image-led Yvonne Ross Jewellery atelier concept. V2 is a darker companion direction on `codex/redesign-yvonne-ross-v2`; V1 remains on `codex/redesign-yvonne-ross`. Phase 1–3 research is preserved in `research/` and never served by the app. The [design prompt](docs/yvonne-ross-editorial-redesign-prompt.md) records the reference principles and Yvonne-specific content.

## Run locally

```bash
npm install
npm run dev
```

Open `/demos/yvonne-ross`. Verify with `npm run typecheck`, `npm run lint`, `npm run build`, and `npm test`. Playwright uses system Chromium where available. The public V3 showcase is [yvonne-ross-jewellery-v3.vercel.app](https://yvonne-ross-jewellery-v3.vercel.app/); the separate V2 showcase is [yvonne-ross-jewellery-concept.vercel.app](https://yvonne-ross-jewellery-concept.vercel.app/).

There is no shop, cart, price or checkout. Selected pieces form a gallery and lead to an enquiry. The contact form is demo-only and sends no message. The map uses OpenStreetMap tiles with attribution. Google rating falls back to a dated snapshot until server-side Places credentials are supplied. Both variants use photographs and the logo from Yvonne Ross Jewellery's official site. See `docs/yvonne-ross-official-media-register.md` for sources and the publication-rights caveat.
