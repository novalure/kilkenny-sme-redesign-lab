import Link from "next/link";
import { Artwork } from "@/components/Artwork";
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
        <div className="hero-topline"><span>DESIGNER & GOLDSMITH / KILKENNY</span><span>01 — FUTURE ATELIER</span></div>
        <div className="hero-content">
          <p className="eyebrow">Yvonne Ross Jewellery</p>
          <h1 id="hero-heading">FORM<span className="hero-hairline" />MADE<br /><span>PERSONAL.</span></h1>
          <div className="hero-bottom">
            <p>Contemporary jewellery and personal commissions from Yvonne Ross, Kilkenny.</p>
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
        <span className="hero-side-note" aria-hidden="true">SCULPTURE / STRUCTURE / SIMPLICITY</span>
      </section>

      <section className="review-stage section-frame" aria-labelledby="review-title">
        <div className="review-heading"><span className="section-index">02 / GOOGLE REVIEWS</span><p>Real feedback, one click away.</p></div>
        <div className="review-composition">
          <div className="review-score"><strong>{reviews.rating.toFixed(1)}</strong><span aria-hidden="true">★★★★★</span></div>
          <div className="review-copy"><h2 id="review-title">The work.<br />The experience.</h2><p>See the current customer feedback on Yvonne Ross Jewellery&apos;s Google listing.</p><div className="review-source">GOOGLE REVIEWS{reviews.count !== null ? ` · ${reviews.count} REVIEWS` : ""}<span>{reviews.source === "places" ? "CURRENT PLACES DATA" : `RATING SNAPSHOT · ${reviews.checkedOn}`}</span></div><a href={reviews.listingUrl} target="_blank" rel="noopener noreferrer" className="action-text" data-event="google_reviews_click">Read reviews on Google <span aria-hidden="true">&gt;</span></a></div>
        </div>
      </section>

      <section id="jewellery" className="jewellery-section" aria-labelledby="jewellery-title">
        <div className="section-frame jewellery-intro"><span className="section-index">03 / SELECTED JEWELLERY</span><h2 id="jewellery-title">OBJECTS OF<br /><span>INTEREST.</span></h2><div><p>Selected pieces from Yvonne&apos;s current collection. Follow each piece to the official shop for its photography and current details.</p><a href={studio.officialShop} target="_blank" rel="noopener noreferrer" className="action-text" data-event="shop_click">Explore the official shop <span aria-hidden="true">&gt;</span></a></div></div>
        <JewelleryReel />
      </section>

      <section className="bespoke-impact" aria-labelledby="bespoke-title">
        <div className="impact-art" data-media-slot="H03"><Artwork kind="bespoke" label="Original abstract metal and geometry study for bespoke commissions" /></div>
        <div className="impact-copy"><span className="section-index">04 / BESPOKE</span><h2 id="bespoke-title">AN IDEA.<br /><span>A FORM.</span></h2><p>Original commissions and remodelling begin with a conversation about what you have in mind.</p><Link href={`${basePath}/bespoke`} className="action action-outline-light" data-event="bespoke_enquiry_click">Explore bespoke <span aria-hidden="true">&gt;</span></Link></div>
        <div className="impact-bottom" aria-hidden="true"><span>PERSONAL COMMISSIONS</span><span>YVONNE ROSS / KILKENNY</span></div>
      </section>

      <section id="designer" className="designer-section section-frame" aria-labelledby="designer-title">
        <div className="designer-lead"><span className="section-index">05 / THE DESIGNER</span><h2 id="designer-title">DESIGNER.<br />GOLDSMITH.<br /><span>KILKENNY.</span></h2><div className="designer-summary"><p>Yvonne Ross is a designer and goldsmith in Kilkenny. Her fine art background informs jewellery with clean lines and a sculptural, architectural character.</p><Link href={`${basePath}/contact`} className="action-text" data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link></div></div>
        <div className="designer-visual" data-media-slot="H04"><Artwork kind="craft" label="Abstract studio atmosphere concept; not a portrait or photograph of Yvonne Ross's studio" /><span>FORM STUDY / CRAFT</span></div>
      </section>

      <section className="engagement-section" aria-labelledby="engagement-title"><div className="engagement-visual" data-media-slot="H05"><Artwork kind="wedding" label="Abstract ring geometry concept, not an actual Yvonne Ross product" /></div><div className="engagement-content"><span className="section-index">06 / ENGAGEMENT & WEDDING</span><h2 id="engagement-title">MADE FOR<br /><span>YOUR MOMENT.</span></h2><p>Explore engagement rings and wedding bands, or discuss a design made around you.</p><Link href={`${basePath}/engagement-wedding`} className="action action-dark" data-event="engagement_enquiry_click">Discuss your ring <span aria-hidden="true">&gt;</span></Link></div></section>

      <section className="material-section section-frame" aria-labelledby="material-title"><div><span className="section-index">07 / MATERIAL & METHOD</span><h2 id="material-title">PRECISION<br />HAS PRESENCE.</h2><p>Yvonne&apos;s practice brings fine art, traditional goldsmithing and a considered approach to gemstones together. Her Gem-A Diamond Diploma informs conversations about diamond rings.</p></div><div className="material-visual" data-media-slot="H06"><Artwork kind="material" label="Abstract metal surface concept artwork" /></div></section>

      <StudioSection />

      <section className="closing-section section-frame"><span className="section-index">09 / BEGIN HERE</span><h2>YOUR NEXT<br /><span>CONVERSATION.</span></h2><div><p>A piece to explore, a commission to begin or a studio visit to plan.</p><Link href={`${basePath}/contact`} className="action action-light" data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link></div></section>
    </>
  );
}
