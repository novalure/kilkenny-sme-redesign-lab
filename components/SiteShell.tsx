"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { basePath, studio } from "@/lib/yvonne";

const nav = [
  { label: "Jewellery", href: `${basePath}#jewellery` },
  { label: "Bespoke", href: `${basePath}/bespoke` },
  { label: "Engagement", href: `${basePath}/engagement-wedding` },
  { label: "Studio", href: `${basePath}#visit` },
  { label: "About", href: `${basePath}#designer` },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="concept-banner">Unofficial website redesign concept <span>·</span> Yvonne Ross Jewellery</div>
      <header className="site-header">
        <Link href={basePath} className="wordmark" aria-label="Yvonne Ross Jewellery, home" onClick={() => setOpen(false)}>
          <span>YVONNE ROSS</span><small>JEWELLERY / KILKENNY</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link className="header-contact" href={`${basePath}/contact`} data-event="contact_header_click">
          Contact Yvonne <span aria-hidden="true">&gt;</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "="}</span>
        </button>
      </header>
      <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
        {nav.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">&gt;</span></Link>)}
        <Link href={`${basePath}/contact`} onClick={() => setOpen(false)} data-event="contact_header_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-kicker"><span>YVONNE ROSS / KILKENNY</span><span>JEWELLERY · BESPOKE · STUDIO</span></div>
      <Link href={`${basePath}/contact`} className="footer-big-link" data-event="contact_header_click">LET&apos;S TALK<span aria-hidden="true">&gt;</span></Link>
      <div className="footer-wordmark" aria-hidden="true">YVONNE ROSS</div>
      <div className="footer-bottom">
        <div><span>{studio.addressLine}, {studio.city}, {studio.country}</span><a href={studio.phoneHref}>{studio.phoneDisplay}</a><a href={`mailto:${studio.email}`}>{studio.email}</a></div>
        <div><Link href={basePath}>Home</Link><Link href={`${basePath}/bespoke`}>Bespoke</Link><Link href={`${basePath}/engagement-wedding`}>Engagement</Link><a href={studio.officialSite} target="_blank" rel="noopener noreferrer">Current official site &gt;</a></div>
      </div>
      <p className="footer-disclaimer">Unofficial website redesign concept · No enquiries are sent from this demo.</p>
    </footer>
  );
}

export function MobileCall() {
  return <a className="mobile-call" href={studio.phoneHref} data-event="mobile_call_click"><span>CALL THE STUDIO</span><span aria-hidden="true">&gt;</span></a>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><MobileCall /></>;
}
