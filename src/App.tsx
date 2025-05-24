import { useState } from 'react';
import MapView from './components/MapView';
import ItineraryBottomSheet from './components/ItineraryBottomSheet';
import { Stop } from './types';

const stops: Stop[] = [
  { id: 1, city: 'Berlin', date: '2025-06-14', coords: [13.404954, 52.520008] },
  { id: 2, city: 'Appenzell', date: '2025-06-18', coords: [9.408623, 47.331417] },
  { id: 3, city: 'Lake Como', date: '2025-06-22', coords: [9.083333, 45.816666] },
  { id: 4, city: 'Milan Airport', date: '2025-06-24', coords: [8.723, 45.63] }
];

export default function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-screen h-screen relative">
      <MapView stops={stops} />
      {open && <ItineraryBottomSheet stops={stops} onClose={() => setOpen(false)} />}
    </div>
  );
}
