import Image from "next/image";

const media = {
  hero: { src: "/images/yvonne-ross/blue-sapphire-halo.jpg", alt: "White gold halo ring with blue sapphire photographed on Yvonne Ross Jewellery's website" },
  flower: { src: "/images/yvonne-ross/diamond-flower.webp", alt: "Yvonne Ross Diamond Flower Ring" },
  halo: { src: "/images/yvonne-ross/green-sapphire-halo.jpg", alt: "Yvonne Ross Green Sapphire Halved Halo Ring" },
  diamond: { src: "/images/yvonne-ross/diamond-halo.jpg", alt: "Yvonne Ross Diamond Halo Ring" },
  craft: { src: "/images/yvonne-ross/blue-geometric-ring.jpg", alt: "Geometric blue-stone ring shown among Yvonne Ross's bespoke work" },
  bespoke: { src: "/images/yvonne-ross/bespoke-selection.jpg", alt: "Selection of jewellery shown on Yvonne Ross's bespoke page" },
  wedding: { src: "/images/yvonne-ross/blue-sapphire-halo.jpg", alt: "White gold halo ring with blue sapphire from Yvonne Ross's bespoke gallery" },
  material: { src: "/images/yvonne-ross/gold-band.jpg", alt: "Gold band with gemstones shown in Yvonne Ross's bespoke gallery" },
} as const;

export type OfficialMediaKind = keyof typeof media;

export function OfficialMedia({ kind, label, priority = false }: { kind: OfficialMediaKind; label?: string; priority?: boolean }) {
  const item = media[kind];
  return <div className={`official-media media-${kind}`}>
    <Image src={item.src} alt={label || item.alt} fill sizes="(max-width: 700px) 100vw, 60vw" priority={priority} />
  </div>;
}
