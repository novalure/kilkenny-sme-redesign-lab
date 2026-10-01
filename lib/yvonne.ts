export const studio = {
  name: "Yvonne Ross Jewellery",
  addressLine: "19 Rose Inn Street",
  city: "Kilkenny City",
  country: "Ireland",
  phoneDisplay: "+353 (0)87 779 9430",
  phoneHref: "tel:+353877799430",
  email: "yvonnerossdesigns@gmail.com",
  latitude: 52.6510261,
  longitude: -7.2517505,
  officialSite: "https://www.yvonneross.com/",
  officialShop: "https://www.yvonneross.com/shop",
  googleListing:
    "https://www.google.com/maps/place/Yvonne+Ross+Jewellery/@52.65101,-7.251749,17z/data=!4m6!3m5!1s0x485d309e40c4494d:0x1aaeff92e6b40f6f!8m2!3d52.65101!4d-7.251749",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=19%20Rose%20Inn%20Street%2C%20Kilkenny%20City%2C%20Ireland",
  reviewSnapshot: {
    rating: 4.6,
    verifiedOn: "2026-10-01",
    count: null as number | null,
  },
} as const;

export const basePath = "/demos/yvonne-ross";

export const pieces = [
  {
    name: "Diamond Flower Ring",
    category: "Engagement & occasion",
    detail: "18ct yellow gold · natural diamond",
    href: "https://www.yvonneross.com/shop/p/product-3-szb2y-gzh2r-tzhkx-gg9wz",
    art: "flower",
  },
  {
    name: "Green Sapphire Halved Halo Ring",
    category: "Signature design",
    detail: "18ct yellow gold · green sapphire",
    href: "https://www.yvonneross.com/shop/p/product-4-9e76d-pr6ls-ddx8r-74nr6",
    art: "halo",
  },
  {
    name: "Diamond Halo Ring",
    category: "Engagement",
    detail: "18ct yellow gold · natural diamond",
    href: "https://www.yvonneross.com/shop/p/product-2-5c6mb-j8mng-zsl73-cg97j",
    art: "diamond",
  },
] as const;
