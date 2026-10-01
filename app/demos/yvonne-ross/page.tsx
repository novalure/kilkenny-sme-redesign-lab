import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";
import { OfficialMedia } from "@/components/OfficialMedia";
import { SelectedWork } from "@/components/SelectedWork";
import { StudioSection } from "@/components/StudioSection";
import { basePath } from "@/lib/yvonne";
import { getReviewSummary } from "@/lib/reviews";

export default async function YvonneHome() {
  const reviews = await getReviewSummary();
  return <>
    <section className="editorial-hero" aria-labelledby="home-title">
      <HeroMedia />
      <div className="editorial-hero-copy">
        <span className="editorial-kicker">YVONNE ROSS · DESIGNER & GOLDSMITH</span>
        <h1 id="home-title">Jewellery, made personal.</h1>
        <p>Thoughtful pieces and one-off commissions, designed in Kilkenny.</p>
        <Link href={`${basePath}/bespoke`} className="editorial-hero-link" data-event="bespoke_enquiry_click">Explore bespoke jewellery <span aria-hidden="true">&gt;</span></Link>
      </div>
    </section>

    <div className="editorial-trust" aria-label="Studio and review information">
      <span>19 ROSE INN STREET · KILKENNY</span>
      <a href={reviews.listingUrl} target="_blank" rel="noopener noreferrer" data-event="google_reviews_click">★★★★★ <strong>{reviews.rating.toFixed(1)}</strong> ON GOOGLE · {reviews.source === "places" ? "CURRENT DATA" : `SNAPSHOT ${reviews.checkedOn}`} <span aria-hidden="true">&gt;</span></a>
      <span>PERSONAL COMMISSIONS & STUDIO VISITS</span>
    </div>

    <section className="editorial-intro" aria-labelledby="intro-title">
      <span className="editorial-kicker">THE ATELIER</span>
      <h2 id="intro-title">An eye for form.<br />A hand for detail.</h2>
      <p>Yvonne Ross brings a fine art sensibility and traditional goldsmithing skills to jewellery with clean lines, sculptural shapes and a personal story.</p>
    </section>

    <section id="jewellery" className="editorial-gallery" aria-labelledby="gallery-title">
      <div className="editorial-heading"><span className="editorial-kicker">YVONNE ROSS JEWELLERY</span><h2 id="gallery-title">Selected work</h2><p>A closer look at pieces designed by Yvonne.</p></div>
      <SelectedWork />
    </section>

    <section className="editorial-story editorial-bespoke" aria-labelledby="bespoke-title">
      <div className="editorial-story-image"><OfficialMedia kind="bespoke" label="Selection of jewellery from Yvonne Ross’s bespoke gallery" /></div>
      <div className="editorial-story-copy"><span className="editorial-kicker">BESPOKE & REMODELLING</span><h2 id="bespoke-title">Made around you.</h2><p>From a new idea to a treasured piece reimagined, Yvonne creates one-off jewellery for private clients. Every project begins with a design consultation.</p><Link href={`${basePath}/bespoke`} className="editorial-link" data-event="bespoke_enquiry_click">Discover the bespoke process <span aria-hidden="true">&gt;</span></Link></div>
    </section>

    <section id="designer" className="editorial-designer" aria-labelledby="designer-title">
      <div className="editorial-designer-copy"><span className="editorial-kicker">MEET THE MAKER</span><h2 id="designer-title">Designed with intention.</h2><p>Based in Kilkenny, Yvonne draws on sculpture and architecture to bring simplicity and structure to her work. Her Gem-A Diamond Diploma also informs conversations about diamond rings.</p><Link href={`${basePath}/contact`} className="editorial-link" data-event="contact_header_click">Speak with Yvonne <span aria-hidden="true">&gt;</span></Link></div>
      <div className="editorial-designer-image"><OfficialMedia kind="craft" label="Geometric blue-stone ring from Yvonne Ross’s bespoke gallery" /></div>
    </section>

    <section className="editorial-story editorial-rings" aria-labelledby="rings-title">
      <div className="editorial-story-image"><OfficialMedia kind="wedding" label="White gold halo ring with blue sapphire from Yvonne Ross’s gallery" /></div>
      <div className="editorial-story-copy"><span className="editorial-kicker">ENGAGEMENT & WEDDING</span><h2 id="rings-title">For a moment that lasts.</h2><p>Explore alternative and traditional engagement rings and wedding bands, or begin a personal design with Yvonne.</p><Link href={`${basePath}/engagement-wedding`} className="editorial-link" data-event="engagement_enquiry_click">Explore rings <span aria-hidden="true">&gt;</span></Link></div>
    </section>

    <StudioSection />
  </>;
}
