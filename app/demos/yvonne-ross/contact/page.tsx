import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { StudioSection } from "@/components/StudioSection";
import { studio } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Contact & Visit | Yvonne Ross Concept",
  description:
    "An unofficial concept contact and studio visit page for Yvonne Ross Jewellery.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  return (
    <>
      <section className="contact-hero">
        <div>
          <p className="eyebrow">Contact Yvonne</p>
          <h1>
            Start with a<br />
            <em>conversation.</em>
          </h1>
          <p>
            Ask about a piece, discuss a commission or plan a visit to the
            Kilkenny studio.
          </p>
        </div>
        <div className="contact-quick">
          <p className="eyebrow">The studio</p>
          <address>
            {studio.addressLine}
            <br />
            {studio.city}, {studio.country}
          </address>
          <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
          <a
            href={studio.directions}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions_click"
          >
            Get directions &gt;
          </a>
          <span>
            Visitors welcome Tuesday–Saturday. Confirm exact hours before
            travelling.
          </span>
        </div>
      </section>
      <section className="contact-main section-pad">
        <div>
          <p className="eyebrow">Send an enquiry</p>
          <h2>
            Tell us a little
            <br />
            <em>about your idea.</em>
          </h2>
          <p>
            This is a preview of the proposed contact experience. To reach
            Yvonne, use her current official website, email or phone.
          </p>
          <a
            href="https://www.yvonneross.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Go to official contact page &gt;
          </a>
        </div>
        <ContactForm initialInterest={interest || ""} />
      </section>
      <StudioSection compact />
    </>
  );
}
