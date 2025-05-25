import { useState } from 'react';
import MapView from './components/MapView';
import ItineraryBottomSheet from './components/ItineraryBottomSheet';
import { Stop } from './types';
import stopsData from './data/itinerary.json';

const stops: Stop[] = stopsData as Stop[];

export default function App() {
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <div className="w-screen h-screen relative">
      <MapView
        stops={stops}
        activeId={activeId}
        onMarkerClick={id => setActiveId(id)}
      />
      {open && (
        <ItineraryBottomSheet
          stops={stops}
          activeId={activeId}
          onSelect={id => setActiveId(id)}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
