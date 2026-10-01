# Future conversion events

The concept does not send analytics or collect lead data. `data-event` attributes identify future instrumentation points. Once approved, attach a consent-aware analytics adapter with no personal data in event payloads.

| Event | Trigger | Intended value |
|---|---|---|
| contact_header_click | Desktop header Contact Yvonne | Primary contact path |
| mobile_call_click | Mobile fixed call action | Phone intent |
| directions_click | Directions CTA | Studio visit intent |
| contact_form_start | First interaction with demo form (future adapter) | Form interest |
| contact_form_submit_demo | Valid demo form submission | UX completion only, never a real lead |
| bespoke_enquiry_click | Bespoke CTA | Commission intent |
| engagement_enquiry_click | Engagement CTA | Ring intent |
| wedding_enquiry_click | Wedding CTA | Wedding intent |
| visit_studio_click | Studio CTA | Visit intent |
| google_reviews_click | Google listing link | Trust engagement |
| product_enquiry_click | Selected product external link | Piece interest |
| shop_click | Official shop link | Transaction exploration |

The adapter should distinguish demo clicks from genuine business outcomes and should not record form field values.
