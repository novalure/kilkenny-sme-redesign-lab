import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { StudioSection } from "@/components/StudioSection";
import { basePath, pieces, studio } from "@/lib/yvonne";
import { getReviewSummary } from "@/lib/reviews";

export default async function YvonneHome() {
  const reviews = await getReviewSummary();
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">An independent jewellery atelier · Kilkenny</p>
          <h1>
            Jewellery
            <br />
            with a sense
            <br />
            <em>of self.</em>
          </h1>
          <p>
            Distinctive pieces and personal commissions from designer and
            goldsmith Yvonne Ross.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#jewellery">
              Explore jewellery <span aria-hidden="true">&gt;</span>
            </a>
            <a className="text-link" href="#visit">
              Visit the studio <span aria-hidden="true">&gt;</span>
            </a>
          </div>
          <span className="hero-number">
            01 / A personal approach to fine jewellery
          </span>
        </div>
        <div className="hero-visual">
          <Artwork
            kind="hero"
            label="Abstract jewellery concept artwork, not a product photograph"
          />
          <span className="hero-vertical">YVONNE ROSS · KILKENNY</span>
        </div>
      </section>

      <div className="trust-strip">
        <span>Kilkenny studio & showroom</span>
        <span className="trust-divider" aria-hidden="true">
          ✦
        </span>
        <span>Personal commissions</span>
        <span className="trust-divider" aria-hidden="true">
          ✦
        </span>
        <a
          href={reviews.listingUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-event="google_reviews_click"
        >
          <strong>★ {reviews.rating.toFixed(1)}</strong> on Google{" "}
          <span aria-hidden="true">&gt;</span>
        </a>
      </div>

      <section id="jewellery" className="discovery section-pad">
        <div className="section-heading">
          <p className="eyebrow">Explore the atelier</p>
          <h2>
            There is more than
            <br />
            <em>one way to begin.</em>
          </h2>
          <p>
            Discover finished jewellery, create something entirely personal, or
            discuss a ring for the moments that matter.
          </p>
        </div>
        <div className="discovery-grid">
          <Link href="#selected" className="discovery-item discovery-one">
            <span className="item-index">01 / Jewellery</span>
            <div>
              <h3>Pieces to discover</h3>
              <span className="item-arrow">Explore selected pieces &gt;</span>
            </div>
          </Link>
          <Link
            href={`${basePath}/bespoke`}
            className="discovery-item discovery-two"
            data-event="bespoke_enquiry_click"
          >
            <span className="item-index">02 / Bespoke</span>
            <div>
              <h3>Made for you</h3>
              <span className="item-arrow">Explore bespoke &gt;</span>
            </div>
          </Link>
          <Link
            href={`${basePath}/engagement-wedding`}
            className="discovery-item discovery-three"
            data-event="engagement_enquiry_click"
          >
            <span className="item-index">03 / Engagement & wedding</span>
            <div>
              <h3>Made to mark a moment</h3>
              <span className="item-arrow">Explore rings &gt;</span>
            </div>
          </Link>
        </div>
      </section>

      <section id="selected" className="selected section-pad">
        <div className="section-line">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>
              A few pieces,
              <br />
              <em>many possibilities.</em>
            </h2>
          </div>
          <a
            href={studio.officialShop}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            data-event="shop_click"
          >
            Visit the current shop <span>&gt;</span>
          </a>
        </div>
        <p className="selected-note">
          Selected designs from Yvonne&apos;s current shop. Concept
          illustrations below are placeholders; see real product photography on
          the official product pages.
        </p>
        <div className="piece-grid">
          {pieces.map((piece, index) => (
            <article className="piece" key={piece.name}>
              <a
                href={piece.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${piece.name} on Yvonne Ross's official shop`}
                data-event="product_enquiry_click"
              >
                <Artwork
                  kind={piece.art}
                  label={`Concept illustration for ${piece.name}; view the official shop for actual product photography`}
                />
              </a>
              <div className="piece-meta">
                <span>
                  0{index + 1} · {piece.category}
                </span>
                <h3>{piece.name}</h3>
                <p>{piece.detail}</p>
                <a
                  href={piece.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View on official shop &gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="designer" className="designer section-pad">
        <div className="designer-art">
          <Artwork
            kind="craft"
            label="Abstract metalwork concept artwork, not a photograph of Yvonne Ross's studio"
          />
          <div className="designer-art-label">Art direction study / 04</div>
        </div>
        <div className="designer-copy">
          <p className="eyebrow light">Meet the designer</p>
          <h2>
            Designed by
            <br />
            <em>Yvonne.</em>
            <br />
            Made to mean
            <br />
            something.
          </h2>
          <p>
            Yvonne Ross is an Irish designer and goldsmith based in Kilkenny
            City. Her fine art background informs a practice shaped by clean
            lines, sculpture and architecture.
          </p>
          <p>
            At her Rose Inn Street studio, she creates individual jewellery for
            private clients as well as pieces to discover in the collection.
          </p>
          <Link href={`${basePath}/contact`} className="text-link light-link">
            Start a conversation <span>&gt;</span>
          </Link>
        </div>
      </section>

      <section className="story-pair section-pad">
        <div className="story-copy">
          <p className="eyebrow">Personal commissions</p>
          <h2>
            For what can&apos;t
            <br />
            <em>be found.</em>
          </h2>
          <p>
            A new piece imagined from the beginning. Jewellery reworked into a
            new form. Yvonne&apos;s bespoke practice begins with a conversation
            about your idea.
          </p>
          <Link
            href={`${basePath}/bespoke`}
            className="button button-dark"
            data-event="bespoke_enquiry_click"
          >
            Discuss a commission <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
        <div className="story-art">
          <Artwork kind="bespoke" label="Abstract commission concept artwork" />
        </div>
      </section>

      <section className="ring-story">
        <div className="ring-art">
          <Artwork
            kind="wedding"
            label="Abstract engagement and wedding concept artwork"
          />
        </div>
        <div className="ring-copy">
          <p className="eyebrow">Engagement & wedding</p>
          <h2>
            A ring with
            <br />
            <em>your story in it.</em>
          </h2>
          <p>
            Explore Yvonne&apos;s engagement and wedding work, or discuss a ring
            designed around you.
          </p>
          <Link
            href={`${basePath}/engagement-wedding`}
            className="text-link"
            data-event="engagement_enquiry_click"
          >
            Discuss your ring <span>&gt;</span>
          </Link>
        </div>
      </section>

      <section className="craft-note section-pad">
        <span className="craft-symbol" aria-hidden="true">
          ✧
        </span>
        <p className="eyebrow">Craft & knowledge</p>
        <h2>
          Beauty in the detail.
          <br />
          <em>Confidence in the making.</em>
        </h2>
        <p>
          Yvonne&apos;s goldsmithing practice includes traditional handmade work
          and a personally selected collection of gemstones. Her Gem-A Diamond
          Diploma informs conversations about diamond engagement and wedding
          rings.
        </p>
      </section>

      <section className="reviews section-pad">
        <div>
          <p className="eyebrow">Customer confidence</p>
          <h2>
            See what
            <br />
            <em>visitors say.</em>
          </h2>
        </div>
        <div className="review-info">
          <div className="rating-stars" aria-hidden="true">
            ★
          </div>
          <strong>
            {reviews.rating.toFixed(1)} <small>/ 5</small>
          </strong>
          <span>
            Google rating ·{" "}
            {reviews.source === "places"
              ? "Places data"
              : "checked 1 October 2026"}
            {reviews.count !== null ? ` · ${reviews.count} reviews` : ""}
          </span>
          <p>
            Read current customer feedback directly on Google. Review excerpts
            are intentionally omitted until their display and attribution
            requirements have been reviewed.
          </p>
          <a
            className="text-link"
            href={reviews.listingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="google_reviews_click"
          >
            Read reviews on Google <span>&gt;</span>
          </a>
        </div>
      </section>

      <StudioSection />

      <section className="closing-contact section-pad">
        <p className="eyebrow">Contact Yvonne</p>
        <h2>
          Tell us what
          <br />
          <em>you have in mind.</em>
        </h2>
        <p>
          Whether it is a piece you have seen, a personal commission or a visit
          to the studio, begin with a conversation.
        </p>
        <Link
          className="button button-dark"
          href={`${basePath}/contact`}
          data-event="contact_header_click"
        >
          Send an enquiry <span aria-hidden="true">&gt;</span>
        </Link>
      </section>
    </>
  );
}
