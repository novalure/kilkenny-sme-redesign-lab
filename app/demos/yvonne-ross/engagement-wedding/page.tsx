import type { Metadata } from "next";
import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { basePath, studio } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Engagement & Wedding | Yvonne Ross Concept",
  description:
    "An unofficial concept for engagement and wedding jewellery by Yvonne Ross.",
};

export default function RingsPage() {
  return (
    <>
      <section className="inner-hero">
        <div>
          <p className="eyebrow">Engagement & wedding</p>
          <h1>
            A moment.
            <br />
            <em>A lifetime.</em>
          </h1>
          <p>
            Explore Yvonne&apos;s engagement and wedding jewellery, or start a
            conversation about a ring made especially for you.
          </p>
          <Link
            href={`${basePath}/contact?interest=Engagement%20Ring`}
            className="button button-dark"
            data-event="engagement_enquiry_click"
          >
            Discuss your ring &gt;
          </Link>
        </div>
        <Artwork
          kind="wedding"
          label="Abstract ring concept artwork, not a product photograph"
        />
      </section>
      <section className="inner-text section-pad">
        <p className="eyebrow">A considered choice</p>
        <h2>
          Every detail
          <br />
          <em>has meaning.</em>
        </h2>
        <div>
          <p>
            Yvonne creates alternative and traditional engagement rings and
            wedding bands. Her Gem-A Diamond Diploma is part of the expertise
            she brings to conversations about diamonds.
          </p>
          <p>
            See the current jewellery selection on her official shop, or arrange
            to discuss a personal design in Kilkenny.
          </p>
          <div className="inline-actions">
            <Link
              href={`${basePath}/contact?interest=Wedding%20Rings`}
              className="text-link"
              data-event="wedding_enquiry_click"
            >
              Discuss wedding rings &gt;
            </Link>
            <a
              href={studio.officialShop}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              data-event="shop_click"
            >
              View official shop &gt;
            </a>
          </div>
        </div>
      </section>
      <section className="inner-cta section-pad">
        <p className="eyebrow">Begin a conversation</p>
        <h2>
          Choose together.
          <br />
          <em>Make it personal.</em>
        </h2>
        <Link
          href={`${basePath}/contact?interest=Engagement%20Ring`}
          className="button button-light"
          data-event="engagement_enquiry_click"
        >
          Send an enquiry &gt;
        </Link>
      </section>
    </>
  );
}
