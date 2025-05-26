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
      <div
        className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 cursor-pointer z-10"
        onClick={() => setActiveId(1)}
      >
        Day 1-2 : fly to Berlin
      </div>
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
