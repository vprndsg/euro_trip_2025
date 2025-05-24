import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Stop } from '../types';
import { UI } from '../ui';

mapboxgl.accessToken = 'pk.INSERT_TOKEN';

type Props = { stops: Stop[] };

/** Mapbox map showing the route polyline. */
export default function MapView({ stops }: Props) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          'line-color': '#1c7dff',
          'line-width': 4
        }
      });
      fit();
    });
  }, [stops]);

  const fit = () => {
    const map = mapRef.current;
    if (!map) return;
    const bounds = new mapboxgl.LngLatBounds();
    stops.forEach(s => bounds.extend(s.coords));
    map.fitBounds(bounds, { padding: UI.padding });
  };

  return <div ref={containerRef} className="w-full h-full" />;
}
