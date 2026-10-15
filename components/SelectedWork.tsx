import Link from "next/link";
import { OfficialMedia } from "@/components/OfficialMedia";
import { SocialIcon } from "@/components/SocialIcon";
import { basePath, pieces, socialLinks } from "@/lib/yvonne";

export function SelectedWork() {
  return <div className="selected-work">
    <div className="work-grid">
      {pieces.map((piece, index) => <figure className="work-piece" key={piece.name}>
        <Link className="work-piece-link" href={`${basePath}/contact?interest=A%20Piece%20I%20Saw%20Online`} aria-label={`Enquire about ${piece.name}`} data-event="product_enquiry_click">
          <div className="work-photo"><OfficialMedia kind={piece.art} label={`${piece.name}, photographed for Yvonne Ross Jewellery`} /></div>
          <figcaption><span>0{index + 1} / {piece.category}</span><h3>{piece.name}</h3><p>{piece.detail}</p></figcaption>
        </Link>
      </figure>)}
    </div>
    <p className="gallery-note">A glimpse of Yvonne&apos;s work. Each commission begins with a conversation.</p>
    <div className="gallery-actions">
      <Link href={`${basePath}/contact?interest=A%20Piece%20I%20Saw%20Online`} className="editorial-link" data-event="product_enquiry_click">Enquire about a piece <span aria-hidden="true">&gt;</span></Link>
      <a href={socialLinks.instagram} className="editorial-link social-text-link" target="_blank" rel="noopener noreferrer" data-event="instagram_click"><SocialIcon platform="instagram" />See recent work on Instagram <span aria-hidden="true">&gt;</span></a>
    </div>
  </div>;
}
