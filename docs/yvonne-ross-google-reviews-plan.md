# Google reviews plan — V2

Listing: https://www.google.com/maps/place/Yvonne+Ross+Jewellery/@52.65101,-7.251749,17z/data=!4m6!3m5!1s0x485d309e40c4494d:0x1aaeff92e6b40f6f!8m2!3d52.65101!4d-7.251749

The V1 visual check on **1 October 2026** verified Yvonne Ross Jewellery, 19 Rose Inn Street, the public phone and **4.6/5** on the rendered Google Maps listing. During V2 work on the same day, a fresh automated Maps visit returned the map and an empty business detail panel, so a new rating or count could not be independently read. The last verified 4.6 snapshot from V1 remains in `lib/yvonne.ts`; the count remains `null`. No earlier unverified count is displayed. Reverify the snapshot before any later public launch, and remove it if stale.

The current V2 places a compact rating in the first viewport, linked to Google with `data-event="google_reviews_click"`. At the user's request, its verification date is not displayed in the design. The source and verification date remain in the server-side data so the snapshot can be checked or replaced when live Places data is connected. No review text, reviewer names, fabricated quotations or unverified count are displayed.

`lib/reviews.ts` remains a server-only Places API (New) adapter. `GOOGLE_PLACES_API_KEY` and `YVONNE_GOOGLE_PLACE_ID` are documented in `.env.example`; neither was present for V2. It validates the business name and rating, returns the live count only if Google supplies one, and revalidates after six hours. A failed request falls back to the dated snapshot. The key is never exposed to the browser.

Individual review excerpts are deferred until a compliant live integration is available. Before displaying them, check current Google Maps Platform terms for Google/reviewer attribution, freshness and any filtering or order disclosure. Do not scrape and store reviews or imply a selected quote represents all feedback. No `AggregateRating` schema is emitted.
