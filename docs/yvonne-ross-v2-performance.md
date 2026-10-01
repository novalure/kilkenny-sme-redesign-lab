# V2 performance decisions

- One variable font family (Geist), self-hosted by Next.js. Cormorant and Manrope were removed from the V2 build.
- Official site images are stored locally and served through Next.js Image; the ten source files total about 1.3 MB. There is no video, motion framework or external font runtime request.
- `HeroMedia` supports a future poster/video slot. Video mounts only near the viewport and only on desktop without reduced-motion preference. No video is configured in V2. Mobile remains static.
- Product discovery uses native overflow and scroll snap. Controls move the existing scroll container; no carousel library.
- Leaflet is split into a dynamic client chunk and now mounts when the studio section approaches the viewport. OSM attribution remains visible after loading.
- Google Places requests remain server-only with six-hour revalidation when credentials exist. The current build uses the dated rating snapshot because credentials are absent.
- Motion is limited to two short campaign entrances, reel scrolling and CTA state changes. All transitions/animations are disabled under `prefers-reduced-motion`.

For continued public use, confirm image and logo reuse permission with Yvonne Ross Jewellery and recapture the current review rating periodically.
