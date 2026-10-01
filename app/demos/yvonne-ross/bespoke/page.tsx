import type { Metadata } from "next";
import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { basePath } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Bespoke Jewellery | Yvonne Ross Concept",
  description: "An unofficial concept for Yvonne Ross Jewellery's personal commissions.",
};

export default function BespokePage() {
  return <>
    <section className="route-hero route-bespoke" aria-labelledby="bespoke-page-title"><div className="route-art" data-media-slot="H03"><Artwork kind="bespoke" label="Original abstract metal form for the bespoke concept" /></div><div className="route-hero-content"><span className="section-index">YVONNE ROSS / BESPOKE</span><h1 id="bespoke-page-title">YOUR IDEA.<br /><span>HER HAND.</span></h1><p>Original jewellery and remodelling, shaped around a personal conversation in Kilkenny.</p><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action action-light" data-event="bespoke_enquiry_click">Discuss a commission <span aria-hidden="true">&gt;</span></Link></div><span className="route-folio">01 / PERSONAL COMMISSIONS</span></section>
    <section className="route-detail section-frame"><span className="section-index">01 / THE BEGINNING</span><h2>BEGIN WITH<br /><span>A CONVERSATION.</span></h2><div><p>Yvonne&apos;s bespoke work includes original pieces and the remodelling of existing jewellery. A design consultation is the starting point for discussing your idea.</p><p>Her fine art background and traditional goldsmithing practice inform jewellery with clean, sculptural forms.</p></div></section>
    <section className="route-duo"><div className="route-duo-art" data-media-slot="H06"><Artwork kind="material" label="Abstract metal surface form study" /></div><div className="route-duo-copy"><span className="section-index">02 / FORM & MATERIAL</span><h2>MAKE IT<br />MEAN<br /><span>MORE.</span></h2><p>An existing piece can take on a new form. A new idea can begin from a material, a stone or a sketch.</p><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action-text" data-event="bespoke_enquiry_click">Start a commission <span aria-hidden="true">&gt;</span></Link></div></section>
    <section className="route-end section-frame"><span className="section-index">03 / NEXT STEP</span><h2>LET&apos;S MAKE<br /><span>IT PERSONAL.</span></h2><Link href={`${basePath}/contact?interest=Bespoke%20Commission`} className="action action-light" data-event="bespoke_enquiry_click">Discuss a commission <span aria-hidden="true">&gt;</span></Link></section>
  </>;
}
