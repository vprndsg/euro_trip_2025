import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Stop } from '../types';
import { UI } from '../ui';
import TravelCard from './TravelCard';
import ForecastGrid, { DayForecast } from './ForecastGrid';
import LiveMapButton from './LiveMapButton';
import DayHeader from './DayHeader';

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
    { day: 'Mon', condition: 'Rain', icon: '☔️' },
    { day: 'Tue', condition: 'Sunny', icon: '☀️' },
    { day: 'Wed', condition: 'Cloudy', icon: '☁️' }
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
        <button onClick={onClose} className="text-xl">x</button>
      </div>
      {(() => {
        const days: { date: string; stops: Stop[] }[] = [];
        stops.forEach(s => {
          const last = days[days.length - 1];
          if (!last || last.date !== s.date) {
            days.push({ date: s.date, stops: [s] });
          } else {
            last.stops.push(s);
          }
        });
        return days.map(day => (
          <div key={day.date} className="mb-4">
            <DayHeader date={day.date} />
            <ul className="px-4 pb-4 space-y-2 pl-2">
              {day.stops.map((stop, i) => (
                <TravelCard
                  key={stop.id}
                  stop={stop}
                  index={i}
                  active={stop.id === activeId}
                  last={i === day.stops.length - 1}
                  onSelect={onSelect}
                />
              ))}
            </ul>
          </div>
        ));
      })()}
      <ForecastGrid forecast={forecast} />
      <div className="px-4 pb-4">
        <LiveMapButton onClick={onClose}>Live Map</LiveMapButton>
      </div>
    </motion.div>
  );
}
