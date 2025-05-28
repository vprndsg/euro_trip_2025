import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import dayjs from 'dayjs';
import { Stop } from '../types';
import { UI } from '../ui';
import { normalizeTime } from '../time';

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
          <li
            key={stop.id}
            onClick={() => onSelect(stop.id)}
            className={
              `flex items-start gap-2 cursor-pointer border-l-4 pl-2 ` +
              (stop.id === activeId ? 'border-blue-500 bg-blue-50' : 'border-transparent')
            }
          >
            <div className="flex flex-col items-center">
              <span
                className="rounded-full bg-blue-500 text-white flex items-center justify-center text-sm"
                style={{ width: UI.badge, height: UI.badge }}
              >
                {i + 1}
              </span>
              {i < stops.length - 1 && (
                <span className="h-full border-r-2 border-dashed border-blue-200 grow" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-bold text-base">{stop.city}</div>
              <div className="text-xs text-gray-600">
                {dayjs(stop.date).format('MMM D')}
                {stop.time && ` – ${normalizeTime(stop.time)}`}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
