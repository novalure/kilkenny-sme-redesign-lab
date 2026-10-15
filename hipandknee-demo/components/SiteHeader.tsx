import Link from "next/link";
import Image from "next/image";

const nav = [
  ["Hip", "/hip"],
  ["Knee", "/knee"],
  ["Other care", "/additional-care"],
  ["Patient guide", "/patient-information"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return <>
    <div className="demo-strip"><span className="strip-dot" /><span className="strip-desktop">Independent redesign concept <span className="strip-separator">·</span> This is not the official practice website</span><span className="strip-mobile">Independent demo · Not the official practice site</span></div>
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Prof. Stuart Edwards, home">
          <Image src="/brand/prof-stuart-edwards-logo.png" width={278} height={58} alt="Prof. Stuart Edwards — Hip and Knee Surgeon" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/contact">Contact practice <span aria-hidden="true">↗</span></Link>
        <div className="mobile-header-actions">
          <a className="mobile-call" href="tel:+353567775126" aria-label="Call the practice on (056) 777 5126" title="Call the practice">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.1 3.7h2.2l1.3 4.1-1.7 1.5a13.6 13.6 0 0 0 5.8 5.8l1.5-1.7 4.1 1.3v2.2c0 .9-.7 1.6-1.6 1.6A15.2 15.2 0 0 1 5.5 5.3c0-.9.7-1.6 1.6-1.6Z" /></svg>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span className="menu-label">Menu</span></summary>
            <nav aria-label="Mobile navigation">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}
              <Link href="/contact">Contact practice<span aria-hidden="true">↗</span></Link>
              <Link href="/appointment">Appointment demo<span aria-hidden="true">↗</span></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  </>;
}
