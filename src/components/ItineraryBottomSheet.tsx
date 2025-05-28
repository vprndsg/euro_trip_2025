import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Stop } from '../types';
import { UI } from '../ui';
import TravelCard from './TravelCard';
import ForecastGrid, { DayForecast } from './ForecastGrid';
import LiveMapButton from './LiveMapButton';
import { CloudRainIcon, SunIcon, CloudIcon, XIcon } from '../icons';

type Props = {
  stops: Stop[];
  activeId: number | null;
  onSelect: (id: number) => void;
  onClose: () => void;
};

/** Draggable bottom sheet displaying the itinerary. */
export default function ItineraryBottomSheet({
  stops,
  activeId,
  onSelect,
  onClose
}: Props) {
  const y = useMotionValue(0);
  const dragConstraints = { top: -400, bottom: 0 };
  const ref = useRef<HTMLDivElement>(null);
  const forecast: DayForecast[] = [
    { day: 'Mon', condition: 'Rain', Icon: CloudRainIcon },
    { day: 'Tue', condition: 'Sunny', Icon: SunIcon },
    { day: 'Wed', condition: 'Cloudy', Icon: CloudIcon }
  ];

  return (
    <motion.div
      ref={ref}
      drag="y"
      style={{ y, width: UI.sheetWidth, maxWidth: UI.sheetMaxWidth }}
      dragConstraints={dragConstraints}
      dragElastic={0.2}
      transition={{ type: 'spring', duration: 0.04 }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-sheet"
    >


     
          <div className="flex justify-between items-center p-4">
    <h2 className="text-2xl font-semibold tracking-tight">Itinerary</h2>
    <button onClick={onClose} className="text-xl">
      <XIcon className="w-6 h-6" />
    </button>
  </div>
<img src="/alps.jpg" alt="Alps" className="w-full aspect-video object-cover rounded-t-sheet" />
      <div className="card">
        <h3 className="text-lg font-bold">Swiss Alps</h3>
        <p className="text-sm text-gray-600">4 days</p>


      </div>
      <img src="/alps.jpg" alt="Alps" className="w-full aspect-video object-cover rounded-t-sheet" />
        <div className="p-4">
          <h3 className="text-base font-bold">Swiss Alps</h3>
          <p className="text-sm text-gray-600">4 days</p>

      </div>
      <ul className="px-4 pb-4 space-y-2 pl-2">
        {stops.map((stop, i) => (
          <TravelCard
            key={stop.id}

            stop={stop}
            index={i}
            active={stop.id === activeId}
            last={i === stops.length - 1}
            onSelect={onSelect}
          />

        ))}
      </ul>
      <ForecastGrid forecast={forecast} />
      <div className="px-4 pb-4">
        <LiveMapButton onClick={onClose}>Live Map</LiveMapButton>
      </div>
    </motion.div>
  );
}
