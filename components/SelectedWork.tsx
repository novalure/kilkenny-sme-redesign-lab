import Link from "next/link";
import { OfficialMedia } from "@/components/OfficialMedia";
import { basePath, pieces } from "@/lib/yvonne";

export function SelectedWork() {
  return <div className="selected-work">
    <div className="work-grid">
      {pieces.map((piece, index) => <figure className="work-piece" key={piece.name}>
        <div className="work-photo"><OfficialMedia kind={piece.art} label={`${piece.name}, photographed for Yvonne Ross Jewellery`} /></div>
        <figcaption><span>0{index + 1} / {piece.category}</span><h3>{piece.name}</h3><p>{piece.detail}</p></figcaption>
      </figure>)}
    </div>
    <p className="gallery-note">A glimpse of Yvonne&apos;s work. Each commission begins with a conversation.</p>
    <Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="editorial-link" data-event="product_enquiry_click">Enquire about a piece <span aria-hidden="true">&gt;</span></Link>
  </div>;
}
