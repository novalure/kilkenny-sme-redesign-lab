# Google reviews plan

Verified listing: https://www.google.com/maps/place/Yvonne+Ross+Jewellery/@52.65101,-7.251749,17z/data=!4m6!3m5!1s0x485d309e40c4494d:0x1aaeff92e6b40f6f!8m2!3d52.65101!4d-7.251749

On 1 October 2026, the rendered Google Maps listing showed Yvonne Ross Jewellery, 19 Rose Inn Street, the verified phone, and **4.6/5**. Its review count was not visible in the accessible view. The supplied earlier note said eight but is not treated as a current verification. The 4.6 value is stored as dated snapshot data in `lib/yvonne.ts`. The site shows this modestly near the hero and in a dedicated review section, with direct Google links. It displays no review quotations and no count.

`lib/reviews.ts` implements a server-only Places API (New) rating/count adapter. It reads `GOOGLE_PLACES_API_KEY` and `YVONNE_GOOGLE_PLACE_ID` from server environment variables, validates the returned business name and rating, and revalidates after six hours. `.env.example` documents the variables without containing a key. The place ID and credential have not been supplied, so the dated snapshot is the current fallback. A failed API request also uses the fallback. Reverify or remove that snapshot before a public demo if it becomes stale. The key is never sent to the browser. The verified Google listing link is always available.

The adapter intentionally does **not** fetch or render individual reviews yet. Before enabling excerpts, review current Google Maps Platform attribution, author attribution, sorting and display requirements. Do not curate reviews in a way that misrepresents their order or sentiment.

No `AggregateRating` schema is emitted. No copied Google review text is stored.
