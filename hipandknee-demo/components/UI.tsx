import Link from "next/link";
import { Treatment } from "@/lib/content";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <span className={`eyebrow ${light ? "light" : ""}`}>{children}</span>; }

export function PageIntro({ eyebrow, title, intro, tone = "light" }: { eyebrow: string; title: string; intro: string; tone?: "light" | "dark" }) {
  return <section className={`page-intro ${tone === "dark" ? "page-intro-dark" : ""}`}><div className="container page-intro-grid"><div><Eyebrow light={tone === "dark"}>{eyebrow}</Eyebrow><h1>{title}</h1></div><p>{intro}</p></div><div className="intro-watermark" aria-hidden="true">SE</div></section>;
}

export function TreatmentCard({ treatment, index = 0 }: { treatment: Treatment; index?: number }) {
  return <Link className="treatment-card" href={`/${treatment.slug}`}><span className="card-number">{String(index + 1).padStart(2, "0")}</span><span className="card-copy"><small>{treatment.label}</small><strong>{treatment.title}</strong><span>{treatment.intro}</span></span><span className="card-arrow" aria-hidden="true">↗</span></Link>;
}

export function ContactBand({ title = "Have a question about your next step?" }: { title?: string }) {
  return <section className="contact-band"><div className="container contact-band-inner"><div><Eyebrow>GET IN TOUCH</Eyebrow><h2>{title}</h2><p>Contact the practice to discuss appointments and current services.</p></div><div className="contact-band-actions"><Link className="button button-dark" href="/contact">Contact the practice <span aria-hidden="true">↗</span></Link><a className="text-link" href="tel:+353567775126">Or call (056) 777 5126 <span aria-hidden="true">↗</span></a></div></div></section>;
}
