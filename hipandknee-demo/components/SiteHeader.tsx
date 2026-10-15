import Link from "next/link";

const nav = [
  ["Hip", "/hip"],
  ["Knee", "/knee"],
  ["Other care", "/additional-care"],
  ["Patient guide", "/patient-information"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return <>
    <div className="demo-strip"><span className="strip-dot" />Independent redesign concept <span className="strip-separator">·</span> This is not the official practice website</div>
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Stuart Edwards Orthopaedic Surgery, home">
          <span className="wordmark-symbol" aria-hidden="true"><span /></span>
          <span><strong>Stuart Edwards</strong><small>Orthopaedic Surgery · Kilkenny</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/contact">Contact practice <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}
            <Link href="/contact">Contact practice<span aria-hidden="true">↗</span></Link>
            <Link href="/appointment">Appointment demo<span aria-hidden="true">↗</span></Link>
          </nav>
        </details>
      </div>
    </header>
  </>;
}
