import type { Metadata } from "next";
import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { basePath } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Bespoke Jewellery | Yvonne Ross Concept",
  description:
    "An unofficial concept for Yvonne Ross Jewellery's personal commissions.",
};

export default function BespokePage() {
  return (
    <>
      <section className="inner-hero">
        <div>
          <p className="eyebrow">Yvonne Ross · Bespoke</p>
          <h1>
            Something
            <br />
            <em>entirely yours.</em>
          </h1>
          <p>
            Jewellery begins with an idea, a memory or a stone. Yvonne creates
            individual pieces for private clients in her Kilkenny studio.
          </p>
          <Link
            href={`${basePath}/contact?interest=Bespoke%20Commission`}
            className="button button-dark"
            data-event="bespoke_enquiry_click"
          >
            Discuss a commission &gt;
          </Link>
        </div>
        <Artwork
          kind="bespoke"
          label="Abstract bespoke jewellery concept artwork"
        />
      </section>
      <section className="inner-text section-pad">
        <p className="eyebrow">A personal approach</p>
        <h2>
          Made around
          <br />
          <em>your idea.</em>
        </h2>
        <div>
          <p>
            Yvonne&apos;s bespoke work includes original jewellery and the
            remodelling of existing pieces. Each commission begins with a design
            consultation to discuss what you have in mind.
          </p>
          <p>
            Her background in fine art and traditional goldsmithing shapes
            pieces with a considered, sculptural character.
          </p>
        </div>
      </section>
      <section className="inner-cta section-pad">
        <p className="eyebrow">Begin a conversation</p>
        <h2>
          Bring an idea.
          <br />
          <em>Leave room for possibility.</em>
        </h2>
        <Link
          href={`${basePath}/contact?interest=Bespoke%20Commission`}
          className="button button-light"
          data-event="bespoke_enquiry_click"
        >
          Discuss a commission &gt;
        </Link>
      </section>
    </>
  );
}
