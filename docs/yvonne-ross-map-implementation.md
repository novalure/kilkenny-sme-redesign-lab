# Studio map implementation

- **Library:** Leaflet, dynamically imported in a client component so the rest of the page can render without browser globals.
- **Tiles:** Standard OpenStreetMap raster tiles from `https://tile.openstreetmap.org/{z}/{x}/{y}.png`. This is intended for a small, low-traffic concept. The map is only loaded on routes where shown, does not preload tiles, and disables scroll-wheel zoom. Before a high-traffic public rollout, use a contracted OSM-derived tile provider with its required attribution and an environment variable for any key.
- **Attribution:** Leaflet displays linked `© OpenStreetMap contributors` over the map. It is never hidden. A replacement provider must add its own attribution.
- **Look:** Muted saturation/contrast is applied to the tile pane only. Controls and attribution retain normal contrast. Standard OSM labels in this Kilkenny area are English, but a particular label language is not guaranteed by the standard raster tiles. An English-labelled style would need a compatible provider.
- **Point:** OpenStreetMap Nominatim building centroid (52.6510261, -7.2517505), queried once during development, not at runtime.
- **Directions:** External Google Maps directions link uses the verified street/city, omitting the disputed Eircode. Opens in a new tab.
- **Fallback:** The location remains behind the map layer if map JavaScript or tiles fail. The address and directions button outside the map remain available.
- **Use policy:** No tile scraping, offline download, bulk requests or cache proxy. Respect https://operations.osmfoundation.org/policies/tiles/ and revisit provider choice if expected traffic grows.
