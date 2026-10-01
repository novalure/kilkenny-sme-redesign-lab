# Kilkenny SME redesign lab

The `codex/redesign-yvonne-ross-v2` branch contains an image-led editorial V2 redesign of the unofficial Yvonne Ross Jewellery concept. It uses an ivory and ink palette, a split campaign image, Yvonne's official logo and her jewellery photography. This is an atelier portfolio with consultation links; there is no shop, cart or checkout. The completed V1 remains on `codex/redesign-yvonne-ross`. Phase 1–3 research is preserved in `research/` and never served by the app.

## Run locally

```bash
npm install
npm run dev
```

Open `/demos/yvonne-ross`. Verify with `npm run typecheck`, `npm run lint`, `npm run build`, and `npm test`. Playwright uses system Chromium where available. The public V2 showcase is [yvonne-ross-jewellery-concept.vercel.app](https://yvonne-ross-jewellery-concept.vercel.app/); the separate V3 showcase is [yvonne-ross-jewellery-v3.vercel.app](https://yvonne-ross-jewellery-v3.vercel.app/).

The form is demo-only and sends no message. The map uses OpenStreetMap tiles with attribution. Google rating falls back to a dated snapshot until server-side Places credentials are supplied. V2 uses photographs and the logo from Yvonne Ross Jewellery's official site. See `docs/yvonne-ross-editorial-redesign-prompt.md` for the design brief and `docs/yvonne-ross-official-media-register.md` for media sources and the publication-rights caveat. Earlier research and audits remain in `docs/yvonne-ross-v2-*`.
