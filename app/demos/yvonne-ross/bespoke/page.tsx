import type { Metadata } from "next";
import Link from "next/link";
import { OfficialMedia } from "@/components/OfficialMedia";
import { basePath } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Bespoke Jewellery | Yvonne Ross Concept",
  description: "An unofficial concept for Yvonne Ross Jewellery's personal commissions.",
};

export default function BespokePage() {
  return <>
    <section className="route-hero route-bespoke" aria-labelledby="bespoke-page-title"><div className="route-art" data-media-slot="H03"><OfficialMedia kind="bespoke" label="Selection of pieces photographed for Yvonne Ross’s bespoke page" priority /></div><div className="route-hero-content"><span className="section-index">YVONNE ROSS / BESPOKE</span><h1 id="bespoke-page-title">A piece that<br /><span>feels like you.</span></h1><p>One-off jewellery and remodelling, beginning with a design consultation in Kilkenny.</p><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action action-light" data-event="bespoke_enquiry_click">Discuss a commission <span aria-hidden="true">&gt;</span></Link></div><span className="route-folio">01 / PERSONAL COMMISSIONS</span></section>
    <section className="route-detail section-frame"><span className="section-index">01 / THE BEGINNING</span><h2>Start with<br /><span>a conversation.</span></h2><div><p>Yvonne makes one-off pieces for private clients and remodels old jewellery into new forms. Each job begins with an initial design consultation.</p><p>Her fine art background and traditional goldsmithing practice inform jewellery with clean, sculptural forms.</p></div></section>
    <section className="route-duo"><div className="route-duo-art" data-media-slot="H06"><OfficialMedia kind="material" label="Gold band with gemstones from Yvonne Ross’s bespoke gallery" /></div><div className="route-duo-copy"><span className="section-index">02 / FORM & MATERIAL</span><h2>Old treasures,<br /><span>new stories.</span></h2><p>An existing piece can take on a new form. A new idea can begin from a material, a stone or a sketch.</p><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action-text" data-event="bespoke_enquiry_click">Start a commission <span aria-hidden="true">&gt;</span></Link></div></section>
    <section className="route-end section-frame"><span className="section-index">03 / NEXT STEP</span><h2>Let&apos;s make<br /><span>it personal.</span></h2><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action action-light" data-event="bespoke_enquiry_click">Discuss a commission <span aria-hidden="true">&gt;</span></Link></section>
  </>;
}
