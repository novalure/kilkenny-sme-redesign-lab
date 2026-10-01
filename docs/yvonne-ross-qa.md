# Yvonne Ross concept QA

Run in the cloud workspace on 1 October 2026. No message, payment or deployment was sent or created.

| Viewport | Header / navigation | Main layout | Map / mobile call | Horizontal overflow |
|---|---|---|---|---|
| 375px | Mobile menu opened and closed | Home and contact visually inspected | `tel:+353877799430` fixed CTA visible; map tiles and attribution visible | None |
| 390px | Mobile header | Home, bespoke, rings and contact visually inspected | Fixed call visible; map and directions usable | None |
| 768px | Tablet menu | Hero, type and CTA visually inspected | Fixed call visible; map loads | None |
| 1024px | Desktop nav and Contact Yvonne visible | Hero and CTA visually inspected | No fixed call; map loads | None |
| 1440px | Desktop nav and Contact Yvonne visible | Full homepage visually inspected | No fixed call; map loads | None |

Browser checks found no page exceptions or framework error overlay. All inspected routes had content. OpenStreetMap tiles rendered with visible attribution. A missing favicon caused one production 404 during an early check and was fixed with `app/icon.svg` before the final build. The final production check showed no console errors or 4xx responses on any of the four routes. Automated axe WCAG 2 A/AA and 2.1 AA scans on home, contact, bespoke and ring routes reported no violations in the tested views; this is a baseline scan, not a full accessibility audit.

The Playwright conversion tests cover desktop contact/reviews/map/directions, the mobile fixed call and overflow, and browser-only form submission with conditional phone validation and no outgoing non-GET request. `npm test` passed 3/3. Typecheck, lint and production build pass. The exact native telephone dialer behaviour requires a real mobile device; the verified `tel:` URL and visible touch target were checked in the browser.
