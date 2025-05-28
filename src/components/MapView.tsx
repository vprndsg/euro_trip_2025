import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Stop } from '../types';
import { UI } from '../ui';

// Use a Vite environment variable so the API token can be provided at build time
// without committing secrets to the repository.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
mapboxgl.accessToken = (import.meta as any).env.VITE_MAPBOX_TOKEN || '';

type Props = {
  stops: Stop[];
  activeId: number | null;
  onMarkerClick: (id: number) => void;
};

/** Mapbox map showing the route polyline. */
export default function MapView({ stops, activeId, onMarkerClick }: Props) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Record<number, mapboxgl.Marker>>({});

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: stops[0].coords,
      zoom: 5,
      interactive: true
    });
    mapRef.current = map;
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: stops.map(s => s.coords)
          }
        }
      });
      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#0ea5e9',
          'line-width': 4
        }
      });
      stops.forEach(s => {
        const marker = new mapboxgl.Marker()
          .setLngLat(s.coords)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(s.city))
          .addTo(map);
        marker.getElement().addEventListener('click', () => onMarkerClick(s.id));
        markersRef.current[s.id] = marker;
      });
      fit();
    });
  }, [stops]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || activeId == null) return;
    const marker = markersRef.current[activeId];
    if (!marker) return;
    map.flyTo({ center: marker.getLngLat(), zoom: 6 });
    marker.togglePopup();
  }, [activeId]);

  const fit = () => {
    const map = mapRef.current;
    if (!map) return;
    const bounds = new mapboxgl.LngLatBounds();
    stops.forEach(s => bounds.extend(s.coords));
    map.fitBounds(bounds, { padding: UI.padding });
  };

  return <div ref={containerRef} className="w-full h-full" />;
}
