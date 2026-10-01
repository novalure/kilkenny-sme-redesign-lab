import Link from "next/link";
import LazyStudioMap from "./LazyStudioMap";
import { basePath, studio } from "@/lib/yvonne";

export function StudioSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="visit" className={`studio-section ${compact ? "studio-compact" : ""}`} aria-labelledby="studio-title">
      <div className="studio-heading"><span className="section-index">08 / VISIT THE STUDIO</span><h2 id="studio-title">Come by in<br /><span>Kilkenny.</span></h2></div>
      <div className="studio-layout"><div className="studio-details"><p>Yvonne&apos;s studio and showroom is at 19 Rose Inn Street, Kilkenny City. Visit to see jewellery or discuss a personal commission.</p><address>{studio.name}<br />{studio.addressLine}<br />{studio.city}, {studio.country}</address><p className="studio-hours">Visitors welcome Tuesday–Saturday. Please confirm exact hours before travelling.</p><div className="studio-actions"><a className="action action-dark" href={studio.directions} target="_blank" rel="noopener noreferrer" data-event="directions_click">Get directions <span aria-hidden="true">&gt;</span></a><Link className="action-text" href={`${basePath}/contact`} data-event="visit_studio_click">Contact Yvonne <span aria-hidden="true">&gt;</span></Link></div><a className="studio-phone" href={studio.phoneHref}>Call the studio · {studio.phoneDisplay}</a></div><div className="studio-map-col"><LazyStudioMap /><p className="map-hint">19 Rose Inn Street / Kilkenny <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a></p></div></div>
    </section>
  );
}
