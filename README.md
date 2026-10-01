# Kilkenny SME redesign lab

The `codex/redesign-yvonne-ross-v2` branch contains the **Future Atelier** V2 redesign of the unofficial Yvonne Ross Jewellery concept. The completed V1 remains on `codex/redesign-yvonne-ross`. Phase 1–3 research is preserved in `research/` and never served by the app.

## Run locally

```bash
npm install
npm run dev
```

Open `/demos/yvonne-ross`. Verify with `npm run typecheck`, `npm run lint`, `npm run build`, and `npm test`. Playwright uses system Chromium where available. V2 is ready for a later Vercel preview but has **not been deployed**.

The form is demo-only and sends no message. The map uses OpenStreetMap tiles with attribution. Google rating falls back to a dated snapshot until server-side Places credentials are supplied. V2 now uses photographs and the logo from Yvonne Ross Jewellery's official site for private concept review. See `docs/yvonne-ross-official-media-register.md` for sources and the publication-rights caveat. See `docs/yvonne-ross-v2-*` for audit, benchmarks, visual comparison and QA.
