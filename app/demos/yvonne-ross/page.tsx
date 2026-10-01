import Link from "next/link";
import { OfficialMedia } from "@/components/OfficialMedia";
import { HeroMedia } from "@/components/HeroMedia";
import { JewelleryReel } from "@/components/JewelleryReel";
import { StudioSection } from "@/components/StudioSection";
import { basePath, studio } from "@/lib/yvonne";
import { getReviewSummary } from "@/lib/reviews";

export default async function YvonneHome() {
  const reviews = await getReviewSummary();
  return (
    <>
      <section className="future-hero" aria-labelledby="hero-heading">
        <HeroMedia />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline"><span>DESIGNED & MADE IN KILKENNY</span><span>01 — THE LIGHT STUDIO</span></div>
        <div className="hero-content">
          <p className="eyebrow">Yvonne Ross Jewellery</p>
          <h1 id="hero-heading">Jewellery<br /><span>made personal.</span></h1>
          <div className="hero-bottom">
            <p>Discover thoughtful jewellery, beautiful gemstones and pieces made just for you by Yvonne Ross.</p>
            <div className="hero-actions">
              <a className="action action-light" href="#jewellery">Explore jewellery <span aria-hidden="true">&gt;</span></a>
              <Link className="action-text" href={`${basePath}/contact`} data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link>
            </div>
          </div>
        </div>
        <a className="hero-review" href={reviews.listingUrl} target="_blank" rel="noopener noreferrer" data-event="google_reviews_click" aria-label={`${reviews.rating.toFixed(1)} out of 5 on Google; read reviews on Google`}>
          <span className="hero-review-stars" aria-hidden="true">★★★★★</span>
          <strong>{reviews.rating.toFixed(1)}</strong>
          <span>GOOGLE RATING{reviews.count !== null ? ` / ${reviews.count} REVIEWS` : ""}</span>
          <span aria-hidden="true">&gt;</span>
        </a>
        <span className="hero-side-note" aria-hidden="true">A LITTLE SPARKLE, A LOT OF MEANING</span>
      </section>

      <section className="review-stage section-frame" aria-labelledby="review-title">
        <div className="review-heading"><span className="section-index">02 / GOOGLE REVIEWS</span><p>Real feedback, one click away.</p></div>
        <div className="review-composition">
          <div className="review-score"><strong>{reviews.rating.toFixed(1)}</strong><span aria-hidden="true">★★★★★</span></div>
          <div className="review-copy"><h2 id="review-title">Kind words<br />from clients.</h2><p>See customer feedback on Yvonne Ross Jewellery&apos;s Google listing.</p><div className="review-source">GOOGLE REVIEWS{reviews.count !== null ? ` · ${reviews.count} REVIEWS` : ""}<span>{reviews.source === "places" ? "CURRENT PLACES DATA" : `RATING SNAPSHOT · ${reviews.checkedOn}`}</span></div><a href={reviews.listingUrl} target="_blank" rel="noopener noreferrer" className="action-text" data-event="google_reviews_click">Read reviews on Google <span aria-hidden="true">&gt;</span></a></div>
        </div>
      </section>

      <section id="jewellery" className="jewellery-section" aria-labelledby="jewellery-title">
        <div className="section-frame jewellery-intro"><span className="section-index">03 / SELECTED JEWELLERY</span><h2 id="jewellery-title">Something<br /><span>to treasure.</span></h2><div><p>A few favourite pieces photographed for Yvonne&apos;s shop. Explore the official listings for current details and availability.</p><a href={studio.officialShop} target="_blank" rel="noopener noreferrer" className="action-text" data-event="shop_click">Explore the official shop <span aria-hidden="true">&gt;</span></a></div></div>
        <JewelleryReel />
      </section>

      <section className="bespoke-impact" aria-labelledby="bespoke-title">
        <div className="impact-art" data-media-slot="H03"><OfficialMedia kind="bespoke" label="Jewellery selection photographed for Yvonne Ross’s bespoke page" /></div>
        <div className="impact-copy"><span className="section-index">04 / BESPOKE</span><h2 id="bespoke-title">Your idea,<br /><span>beautifully made.</span></h2><p>Yvonne creates one-off jewellery and remodels existing pieces. Each project begins with an initial design consultation.</p><Link href={`${basePath}/bespoke`} className="action action-outline-light" data-event="bespoke_enquiry_click">Explore bespoke <span aria-hidden="true">&gt;</span></Link></div>
        <div className="impact-bottom" aria-hidden="true"><span>PERSONAL COMMISSIONS</span><span>YVONNE ROSS / KILKENNY</span></div>
      </section>

      <section id="designer" className="designer-section section-frame" aria-labelledby="designer-title">
        <div className="designer-lead"><span className="section-index">05 / MEET THE MAKER</span><h2 id="designer-title">Made with<br /><span>Yvonne.</span></h2><div className="designer-summary"><p>Yvonne Ross is a designer and goldsmith in Kilkenny. Her fine art background shapes jewellery with clean lines and simplicity informed by sculpture and architecture. She creates one-off pieces for private clients.</p><Link href={`${basePath}/contact`} className="action-text" data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link></div></div>
        <div className="designer-visual" data-media-slot="H04"><OfficialMedia kind="craft" label="Geometric blue-stone ring photographed for Yvonne Ross’s bespoke gallery" /><span>FROM YVONNE’S BESPOKE GALLERY</span></div>
      </section>

      <section className="engagement-section" aria-labelledby="engagement-title"><div className="engagement-visual" data-media-slot="H05"><OfficialMedia kind="wedding" label="White gold halo ring with blue sapphire from Yvonne Ross’s bespoke gallery" /></div><div className="engagement-content"><span className="section-index">06 / ENGAGEMENT & WEDDING</span><h2 id="engagement-title">For your<br /><span>next chapter.</span></h2><p>Explore Yvonne’s alternative and traditional engagement rings and wedding bands, or discuss a design made around you.</p><Link href={`${basePath}/engagement-wedding`} className="action action-dark" data-event="engagement_enquiry_click">Discuss your ring <span aria-hidden="true">&gt;</span></Link></div></section>

      <section className="material-section section-frame" aria-labelledby="material-title"><div><span className="section-index">07 / MATERIAL & METHOD</span><h2 id="material-title">Details to<br />fall for.</h2><p>Yvonne works with traditional goldsmithing skills and a personally selected collection of gemstones. Her Gem-A Diamond Diploma informs conversations about diamond rings.</p></div><div className="material-visual" data-media-slot="H06"><OfficialMedia kind="pendant" label="Aquamarine pendant photographed for Yvonne Ross’s bespoke gallery" /></div></section>

      <StudioSection />

      <section className="closing-section section-frame"><span className="section-index">09 / BEGIN HERE</span><h2>Shall we<br /><span>make something?</span></h2><div><p>A piece to explore, a commission to begin or a studio visit to plan.</p><Link href={`${basePath}/contact`} className="action action-light" data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link></div></section>
    </>
  );
}
