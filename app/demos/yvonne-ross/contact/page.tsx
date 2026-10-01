import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { StudioSection } from "@/components/StudioSection";
import { studio } from "@/lib/yvonne";

export const metadata: Metadata = {
  title: "Contact & Visit | Yvonne Ross Concept",
  description: "An unofficial concept contact and studio visit page for Yvonne Ross Jewellery.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  return <>
    <section className="contact-hero" aria-labelledby="contact-title"><div><span className="section-index">YVONNE ROSS / CONTACT</span><h1 id="contact-title">Say hello<br /><span>to Yvonne.</span></h1><p>Ask about a piece, start a commission or plan a visit to the Kilkenny studio.</p></div><div className="contact-direct"><span>THE STUDIO / KILKENNY</span><address>{studio.addressLine}<br />{studio.city}, {studio.country}</address><a href={studio.phoneHref}>Call {studio.phoneDisplay} &gt;</a><a href={`mailto:${studio.email}`}>Email {studio.email} &gt;</a><a href={studio.directions} target="_blank" rel="noopener noreferrer" data-event="directions_click">Get directions &gt;</a><small>Visitors welcome Tuesday–Saturday. Confirm exact hours before travelling.</small></div></section>
    <section className="contact-main section-frame"><div><span className="section-index">01 / ENQUIRY PREVIEW</span><h2>Tell us<br /><span>your idea.</span></h2><p>This form demonstrates the proposed experience. It does not send or store your details. To reach Yvonne, use her official website, email or phone.</p><a href="https://www.yvonneross.com/contact" target="_blank" rel="noopener noreferrer" className="action-text">Go to official contact page <span aria-hidden="true">&gt;</span></a></div><ContactForm initialInterest={interest || ""} /></section>
    <StudioSection compact />
  </>;
}
