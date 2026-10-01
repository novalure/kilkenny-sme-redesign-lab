import type { Metadata } from "next";
import Link from "next/link";
import { OfficialMedia } from "@/components/OfficialMedia";
import { basePath, studio } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Engagement & Wedding | Yvonne Ross Concept",
  description: "An unofficial concept for engagement and wedding jewellery by Yvonne Ross.",
};

export default function RingsPage() {
  return <>
    <section className="route-hero route-rings" aria-labelledby="rings-title"><div className="route-art" data-media-slot="H05"><OfficialMedia kind="wedding" label="White gold halo ring with blue sapphire shown on Yvonne Ross’s bespoke page" priority /></div><div className="route-hero-content"><span className="section-index">YVONNE ROSS / ENGAGEMENT & WEDDING</span><h1 id="rings-title">A ring for<br /><span>your story.</span></h1><p>Contemporary forms for an intimate choice. Explore Yvonne&apos;s work or discuss a ring made around you.</p><Link href={`${basePath}/contact?interest=Engagement%20Ring`} className="action action-light" data-event="engagement_enquiry_click">Discuss your ring <span aria-hidden="true">&gt;</span></Link></div><span className="route-folio">02 / ENGAGEMENT & WEDDING</span></section>
    <section className="route-detail section-frame"><span className="section-index">01 / CONSIDERED DESIGN</span><h2>Chosen with<br /><span>care.</span></h2><div><p>Yvonne offers alternative and traditional engagement rings and wedding bands. Her Gem-A Diamond Diploma informs conversations about diamond rings.</p><p>See her current jewellery selection on the official shop, or discuss a personal design at the Kilkenny studio.</p><a href={studio.officialShop} target="_blank" rel="noopener noreferrer" className="action-text" data-event="shop_click">View the official shop <span aria-hidden="true">&gt;</span></a></div></section>
    <section className="route-duo route-duo-rings"><div className="route-duo-art" data-media-slot="H06"><OfficialMedia kind="diamond" label="Yvonne Ross Diamond Halo Ring from the official shop" /></div><div className="route-duo-copy"><span className="section-index">02 / DETAIL</span><h2>Every detail<br /><span>matters.</span></h2><p>Discuss the material, form and details that matter to you.</p><Link href={`${basePath}/contact?interest=Wedding%20Rings`} className="action-text" data-event="engagement_enquiry_click">Discuss wedding rings <span aria-hidden="true">&gt;</span></Link></div></section>
    <section className="route-end section-frame"><span className="section-index">03 / NEXT STEP</span><h2>Let&apos;s find<br /><span>your ring.</span></h2><Link href={`${basePath}/contact?interest=Engagement%20Ring`} className="action action-light" data-event="engagement_enquiry_click">Discuss your ring <span aria-hidden="true">&gt;</span></Link></section>
  </>;
}
