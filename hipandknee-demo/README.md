# Stuart Edwards — independent redesign demonstration

An English-language website concept for an Irish orthopaedic practice. Built with Next.js 16.4.1, React 19.3.1 and TypeScript 5.9.3. The app is intentionally public but `noindex, nofollow` in HTML metadata and the `X-Robots-Tag` response header.

This is **not the official practice website**. Company details, procedure topics, the practice logo, surgeon portrait, banner texture and selected anatomical illustrations were taken from the publicly available `hipandkneesurgery.ie` site as inspected on 15 October 2026, following the user's request to use the existing identity. The visual palette emphasizes the original site’s blue `#024278` and `#044670`, bright cyan `#2ac6f9`, and pale blue `#bfd1e0`. The transparent white and cyan practice logo is reproduced byte for byte from the source site. Current service scope, all medical copy, credentials, patient documents, image usage rights and legal notices require practice approval before official use. No testimonial, rating, third-party endorsement or unverified success rate has been reused.

## Run

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run start
```

The only client-side interaction is a browser-only appointment form preview. It submits no network request and saves no data. The call, email and map links open external applications when selected.

The home hero includes a custom decorative SVG knee study. Its tibia moves through a small, slow rotation; no video, external animation library, or data request is needed. It is hidden from assistive technology, and `prefers-reduced-motion` stops the animation. This graphic is a visual metaphor, not a clinical or diagnostic illustration.

## Original visual assets

Files under `public/brand/` are unchanged copies from `https://www.hipandkneesurgery.ie/images/`: `prof-stuart-edwards-logo.png`, `stuart-edwards-profile-photo.jpg`, `flash-banner.jpg`, `1.jpg` through `4.jpg`, `hip-osteoarthritis.jpg`, and `knee-osteoarthritis.jpg`. The source images are small, so they are presented as contained illustrations and a modest portrait instead of enlarged full-width photography. `public/social-card.png` is a new layout that includes the original logo and hip illustration. The demo must remain clearly marked as an independent concept until practice approval.

## Pages

- `/` — start
- `/about` — surgeon and practice overview
- `/hip` — hip care overview, with `/hip/hip-replacement`, `/hip/anterior-approach`, `/hip/hip-arthroscopy`, `/hip/hip-resurfacing`, `/hip/revision`
- `/knee` — knee care overview, with `/knee/knee-replacement`, `/knee/partial-replacement`, `/knee/revision`, `/knee/arthroscopy`, `/knee/acl-reconstruction`, `/knee/osteotomy`, `/knee/patella-stabilisation`, `/knee/cartilage`
- `/additional-care` — additional care overview, with `/additional-care/shoulder`, `/additional-care/elbow`, `/additional-care/hand-wrist`, `/additional-care/foot-ankle`
- `/osteoarthritis`, `/patient-information`, `/preparing-for-surgery`, `/for-gps`, `/faq`
- `/contact`, `/appointment`, `/privacy`, `/medical-notice`, and custom 404

Legacy source-site paths have explicit redirects in `next.config.ts`. Obsolete or unverified pages (2017 podcast, old testimonials, broken multimedia, old PDFs, empty pages and the vendor showcase) are not reproduced as if current.

## Audit recommendation → implementation → check

| Recommendation | Implementation | Verification |
| --- | --- | --- |
| Fix the wrong total-hip content and duplicate route | Both old hip URLs redirect to the new, correct `/hip/hip-replacement` content | Redirect responses and destination content checked locally |
| Replace empty knee and upper-limb pages | Complete `/knee` and `/additional-care` hubs, plus procedure pages | Direct URL 200 and browser render checked |
| Restore a usable mobile journey | Responsive layout, native mobile menu, large controls, visible phone link | 390px and 820px browser checks, no horizontal overflow on sampled flows |
| Make appointments clear and safe | Prominent call/contact actions; labeled, validated browser-only form with honest success state | Menu navigation and form interaction checked without sending a request |
| Remove stale or misleading resources | Broken media, old testimonials, third-party showcase and unreviewed PDFs not reused; patient guide explains document status | Route inventory and page text checked |
| Resolve contact inconsistency | Main published contact number `(056) 777 5126`, clickable `tel:` and email; source discrepancy documented | Links checked in browser; current number still requires practice confirmation |
| Improve readability and navigation | Distinct hubs, concise procedure pages, related links, questions to ask, patient guide and GP page | 31 direct HTML routes returned 200 locally |
| Improve SEO metadata while keeping demo unindexed | Individual titles/descriptions, Open Graph card, semantic headings, `lang="en"`, noindex header/meta | HTML and response headers checked |
| Accessibility and motion | Semantic HTML, skip link, native `details` for menu/FAQ, visible focus, labels, local fonts, reduced-motion CSS | Axe WCAG A/AA scan on all 31 routes at desktop and mobile; no reported violations after contrast corrections |
| Avoid unsupported trust claims | No review schema, success statistics or synthetic doctor portrait; the real portrait and practice logo are reused from the source site | Source inspection |
| Review consent and data flow | No analytics, cookies or real data collection in demo; privacy note calls out approval needed for an official launch | Fresh browser request/cookie checks |
| Make the source reproducible | Exact dependency versions, `package-lock.json`, `npm ci` | Install/build/lint/typecheck recorded during delivery |

## Unresolved before official use

1. Practice approval of all medical and organisational information, especially additional care availability and the current professional title.
2. Practice confirmation of phone number, email, location, referral requirements and appointment workflow.
3. Replacement of outdated patient PDFs with currently approved hospital documents.
4. Approved legal privacy notice and any real form delivery service, including data processing and consent design.
5. Practice confirmation of usage rights and currency for the logo, portrait and anatomical images reproduced from the existing website. Decorative SVG remains non-diagnostic.

## Tooling

Vercel CLI installed globally with `npm i -g vercel`; `vercel --version` returned **64.2.0**. The CLI reported `loggedIn: false` in this environment, so authenticated Vercel connector actions are used if CLI deployment remains unavailable. The CLI help was inspected for deploy and project options.
