import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-lead"><Image className="footer-brand" src="/brand/prof-stuart-edwards-logo.png" width={278} height={58} alt="Prof. Stuart Edwards — Hip and Knee Surgeon" /><span className="eyebrow light">TAKE THE NEXT STEP</span><h2>Care begins with<br /><em>a conversation.</em></h2><p>For appointments and enquiries, contact the practice directly.</p><a className="button button-light" href="tel:+353567775126">Call (056) 777 5126 <span aria-hidden="true">↗</span></a></div>
      <div className="footer-columns">
        <div><h3>Explore</h3><Link href="/hip">Hip care</Link><Link href="/knee">Knee care</Link><Link href="/additional-care">Other care</Link><Link href="/patient-information">Patient guide</Link></div>
        <div><h3>Practice</h3><Link href="/about">About Prof. Edwards</Link><Link href="/for-gps">For GPs</Link><Link href="/faq">Questions & answers</Link><Link href="/contact">Contact & location</Link></div>
        <div><h3>Location</h3><p>Aut Even Hospital<br />Freshford Road<br />Kilkenny, Ireland</p><a href="mailto:orthojoints.auteven@upmc.ie">orthojoints.auteven@upmc.ie</a></div>
      </div>
    </div>
    <div className="container footer-bottom"><p>Independent redesign demonstration based on the existing public website. No appointment requests are transmitted. Confirm current services and details with the practice.</p><div><Link href="/privacy">Privacy note</Link><Link href="/medical-notice">Medical notice</Link></div></div>
  </footer>;
}
