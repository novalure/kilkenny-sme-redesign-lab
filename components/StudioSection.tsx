import Link from "next/link";
import LazyStudioMap from "./LazyStudioMap";
import { basePath, studio } from "@/lib/yvonne";

export function StudioSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="visit"
      className={`studio-section ${compact ? "studio-compact" : ""}`}
    >
      <div className="studio-content">
        <p className="eyebrow">Visit the Kilkenny Studio</p>
        <h2>
          Find us on
          <br />
          <em>Rose Inn Street.</em>
        </h2>
        <p className="studio-intro">
          Visit the studio and showroom in the heart of Kilkenny City. Browse
          existing pieces or begin a conversation about something made for you.
        </p>
        <address>
          {studio.name}
          <br />
          {studio.addressLine}
          <br />
          {studio.city}, {studio.country}
        </address>
        <p className="hours">
          Visitors welcome Tuesday–Saturday. Please confirm exact hours before
          travelling.
        </p>
        <div className="studio-actions">
          <a
            className="button button-dark"
            href={studio.directions}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions_click"
          >
            Get directions <span aria-hidden="true">&gt;</span>
          </a>
          <Link
            className="button button-outline"
            href={`${basePath}/contact`}
            data-event="visit_studio_click"
          >
            Contact Yvonne <span aria-hidden="true">&gt;</span>
          </Link>
        </div>
        <a className="studio-phone" href={studio.phoneHref}>
          Call the studio · {studio.phoneDisplay}
        </a>
      </div>
      <div className="studio-map-col">
        <LazyStudioMap />
        <p className="map-hint">
          19 Rose Inn Street · Kilkenny City <span>·</span>{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
          >
            © OpenStreetMap contributors
          </a>
        </p>
      </div>
    </section>
  );
}
