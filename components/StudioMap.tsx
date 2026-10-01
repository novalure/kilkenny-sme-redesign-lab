"use client";

import { useEffect, useRef } from "react";
import { studio } from "@/lib/yvonne";

export default function StudioMap() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let active = true;
    import("leaflet").then((L) => {
      if (!active || !ref.current) return;
      map = L.map(ref.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: true,
      }).setView([studio.latitude, studio.longitude], 16);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
      }).addTo(map);
      L.control.zoom({ position: "topright" }).addTo(map);
      const marker = L.divIcon({
        className: "studio-pin",
        html: '<span aria-hidden="true">YR</span>',
        iconSize: [44, 44],
        iconAnchor: [22, 44],
      });
      L.marker([studio.latitude, studio.longitude], {
        icon: marker,
        title: studio.name,
      })
        .addTo(map)
        .bindPopup("Yvonne Ross Jewellery · 19 Rose Inn Street");
    });
    return () => {
      active = false;
      map?.remove();
    };
  }, []);
  return (
    <div className="map-shell">
      <div
        ref={ref}
        className="studio-map"
        role="application"
        aria-label="Interactive map showing 19 Rose Inn Street, Kilkenny"
      />
      <div className="map-fallback" aria-hidden="true">
        <span>
          Yvonne Ross Jewellery
          <br />
          19 Rose Inn Street, Kilkenny
        </span>
      </div>
    </div>
  );
}
