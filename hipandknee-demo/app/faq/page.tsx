import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, Eyebrow, PageIntro } from "@/components/UI";
export const metadata: Metadata = { title: "Frequently asked questions", description: "Practical information about the location, contact and purpose of this orthopaedic redesign demo." };
const items = [
  { q: "Where is the practice located?", a: "The existing website lists Aut Even Hospital, Freshford Road, Kilkenny, Ireland. Please confirm your appointment location with the practice." },
  { q: "How can I request an appointment?", a: "Call the practice on (056) 777 5126 or use the published email address. The form on this demonstration site is a design example only and sends nothing." },
  { q: "Do I need a GP referral?", a: "The current referral requirements are not confirmed in the source material. Ask the practice before making arrangements." },
  { q: "Are shoulder, hand or foot services currently available?", a: "These topics appear on the original website. Please confirm the current scope of services directly with the practice." },
  { q: "Can I use the old PDF care pathways?", a: "This demo does not reuse them as current instructions. Ask your treating team for the latest, approved hospital documents." },
  { q: "Does this site provide medical advice?", a: "No. The content is an independent redesign concept for general information. A clinician must assess your individual situation." },
];
export default function Faq() { return <><PageIntro eyebrow="PATIENT GUIDE" title="Questions & answers" intro="A few practical answers, plus the right contact when details need confirmation." tone="dark" /><section className="section-pad"><div className="container faq-layout"><div><Eyebrow>GOOD TO KNOW</Eyebrow><h2>Find your answer.<br /><em>Keep the conversation open.</em></h2><p>Some operational details on the original website may have changed. We highlight what needs confirmation rather than guessing.</p><Link className="text-link" href="/contact">Contact the practice <span aria-hidden="true">↗</span></Link></div><div className="faq-list">{items.map((item, i) => <details key={item.q}><summary><span>{String(i + 1).padStart(2, "0")}</span>{item.q}<b aria-hidden="true">+</b></summary><p>{item.a}</p></details>)}</div></div></section><ContactBand /></>; }
