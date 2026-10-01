"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { basePath, studio } from "@/lib/yvonne";

const nav = [
  { label: "Jewellery", href: `${basePath}#jewellery` },
  { label: "Bespoke", href: `${basePath}/bespoke` },
  { label: "Engagement & Wedding", href: `${basePath}/engagement-wedding` },
  { label: "The Designer", href: `${basePath}#designer` },
  { label: "Visit", href: `${basePath}#visit` },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="concept-banner">
        Independent website redesign concept · Unofficial
      </div>
      <header className="site-header">
        <Link
          href={basePath}
          className="wordmark"
          aria-label="Yvonne Ross Jewellery, home"
          onClick={() => setOpen(false)}
        >
          <span>YVONNE ROSS</span>
          <small>JEWELLERY</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="header-contact"
          href={`${basePath}/contact`}
          data-event="contact_header_click"
        >
          Contact Yvonne <span aria-hidden="true">&gt;</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </header>
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href={`${basePath}/contact`} onClick={() => setOpen(false)}>
          Send an enquiry &gt;
        </Link>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow light">Yvonne Ross Jewellery</p>
          <h2>
            Something personal
            <br />
            begins here.
          </h2>
          <Link className="text-link light-link" href={`${basePath}/contact`}>
            Contact Yvonne <span>&gt;</span>
          </Link>
        </div>
        <div className="footer-details">
          <p>
            19 Rose Inn Street
            <br />
            Kilkenny City, Ireland
          </p>
          <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Yvonne Ross Jewellery · Unofficial website redesign concept</span>
        <a href={studio.officialSite} target="_blank" rel="noopener noreferrer">
          Current official website &gt;
        </a>
      </div>
    </footer>
  );
}

export function MobileCall() {
  return (
    <a
      className="mobile-call"
      href={studio.phoneHref}
      data-event="mobile_call_click"
    >
      <span aria-hidden="true">☎</span> Call the Studio{" "}
      <span aria-hidden="true">&gt;</span>
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileCall />
    </>
  );
}
