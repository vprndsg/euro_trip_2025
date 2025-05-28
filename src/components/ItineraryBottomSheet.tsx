import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Stop } from '../types';
import { UI } from '../ui';
import TravelCard from './TravelCard';
import ForecastGrid, { DayForecast } from './ForecastGrid';
import LiveMapButton from './LiveMapButton';

export type ItineraryBottomSheetProps = {
  open: boolean;
  stops: Stop[];
  activeId: number | null;
  onSelect: (id: number) => void;
  onClose: () => void;
};

/** Draggable bottom sheet displaying the itinerary. */
export default function ItineraryBottomSheet({
  open,
  stops,
  activeId,
  onSelect,
  onClose
}: ItineraryBottomSheetProps) {
  const y = useMotionValue(0);
  const dragConstraints = { top: -400, bottom: 0 };
  const ref = useRef<HTMLDivElement>(null);
  const forecast: DayForecast[] = [
    { day: 'Mon', condition: 'Rain', icon: '☔️' },
    { day: 'Tue', condition: 'Sunny', icon: '☀️' },
    { day: 'Wed', condition: 'Cloudy', icon: '☁️' }
  ];

  return (
    <motion.div
      ref={ref}
      drag="y"
      style={{
        y,
        width: UI.sheetWidth,
        maxWidth: UI.sheetMaxWidth,
        overflow: 'hidden'
      }}
      dragConstraints={dragConstraints}
      dragElastic={0.2}
      transition={{ type: 'spring', duration: 0.04 }}
      layout
      animate={{ height: open ? 'auto' : 0 }}
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-sheet ${
        open ? '' : 'pointer-events-none'
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-semibold tracking-tight">Itinerary</h2>
        <button onClick={onClose} className="text-xl">
          ×
        </button>
      </div>
      <img
        src="/alps.jpg"
        alt="Alps"
        className="w-full aspect-video object-cover rounded-t-sheet"
      />
      <div className="p-4">
        <h3 className="text-base font-bold">Swiss Alps</h3>
        <p className="text-sm text-gray-600">4 days</p>
      </div>
      <ul className="px-4 pb-4 space-y-2">
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
