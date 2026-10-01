# V2 QA — 1 October 2026

Local screenshots reviewed at 375, 390, 430, 768, 1024, 1280, 1440 and 1728px for all four routes. V1 screenshots were captured at 375, 390, 768, 1024 and 1440px before changes. The V2 desktop/mobile full-page views were inspected after implementation. No body-level horizontal overflow at any checked width. The bespoke 390px long heading and homepage 375px closing heading were corrected after the first inspection.

- **First viewport:** Desktop Contact Yvonne remains in the header; the 4.6 Google rating is visible at the bottom of the hero. At 375/390/430px the rating ends above the persistent Call the Studio bar.
- **Reviews:** Editorial rating section immediately follows the hero, links to Google, omits unverified count and individual review quotations. Rating is a dated snapshot; see reviews plan.
- **Jewellery:** Native horizontal reel moves using controls and touch/trackpad scroll; product links lead to the official listings. Abstract images are identified as concept visuals.
- **Bespoke, engagement and contact:** Each route has its own V2 hero, legible CTAs and shared design language. Contact form remains browser-only.
- **Studio/map:** Leaflet loads as the studio section approaches. Interactive OSM map retains © OpenStreetMap contributors, directions and address; fallback address remains visible.
- **Navigation and accessibility:** Mobile menu opens/closes, keyboard focus is visible, headings are semantic, media has descriptive labels, reduced motion is respected, and noindex/nofollow plus robots disallow remain.
- **Automated checks:** `npm run typecheck`, `npm run lint`, `npm run build`, `npm test` pass. Browser tests cover review visibility/link, desktop contact, mobile call/overflow/reel, map attribution/directions and no-send form behaviour.
- **Console:** All route first views checked in Chromium. A transient hydration warning occurred on some rapid contact-route captures in the development server. The built production server was then checked on all four routes at 390 and 1440px, including the map sections: no page errors, console errors, missing local requests or horizontal overflow. OSM tiles loaded (6 mobile, 12 desktop) with attribution visible.

No V2 deployment was created.
