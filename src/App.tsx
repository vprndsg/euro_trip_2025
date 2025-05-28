import { useState } from 'react';
import MapView from './components/MapView';
import ItineraryBottomSheet from './components/ItineraryBottomSheet';
import { Stop } from './types';
import stopsData from './data/itinerary.json';

const stops: Stop[] = stopsData as Stop[];


  return (
    <div className="w-screen h-screen relative">
      {/* clickable header that jumps to the Berlin stop */}
      <button
        type="button"
        className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 cursor-pointer z-10"
        onClick={() => setActiveId(1)}
      >
        Day&nbsp;1-2 : fly to Berlin
      </button>

      <MapView
        stops={stops}
        activeId={activeId}
        onMarkerClick={id => setActiveId(id)}
      />


      <ItineraryBottomSheet
        open={showItinerary}
        stops={stops}
        activeId={activeId}
        onSelect={id => setActiveId(id)}
        onClose={() => setShowItinerary(false)}
      />

      {!showItinerary && (
        <button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-sheet"
          onClick={() => setShowItinerary(true)}
        >
          Show Itinerary
        </button>

      )}
    </div>
  );
}
