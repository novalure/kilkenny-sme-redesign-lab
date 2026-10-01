# V3 — Editorial Atelier

This is a separate branch from V2. V3 keeps the verified studio details, contact routes, dated review signal and no-send enquiry preview. It uses Yvonne Ross Jewellery's own photographs and official logo. The public showcase is https://yvonne-ross-jewellery-v3.vercel.app/; V2 remains separately available at https://yvonne-ross-jewellery-concept.vercel.app/.

The current direction follows the [editorial prompt](./yvonne-ross-editorial-redesign-prompt.md): a centred official logo, restrained navigation, large jewellery photography, serif display type, white space, sharp edges and text links. V3 uses the official aquamarine earrings photograph as its campaign image. Selected pieces are a gallery with one enquiry route, without shop links, prices, stock or checkout. The dated Google rating links to the listing in a quiet information strip.

Official source URLs and the publication-rights caveat are in [the media register](./yvonne-ross-official-media-register.md). The V3 browser QA covered all four routes at 390 and 1440px with all images loaded. There were no page errors, broken images or horizontal overflow. The production build and all four conversion tests passed.

After deployment, both public links and all four routes on each site returned HTTP 200 without login. The home pages were opened in Chromium at 390 and 1440px with the correct variant, official logo, loaded hero image, no page errors and no horizontal overflow.
