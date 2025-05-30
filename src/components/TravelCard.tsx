import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { Stop } from '../types';
import { normalizeTime } from '../time';
import GoogleMapsLink from './GoogleMapsLink';

export type TravelCardProps = {
  stop: Stop;
  index: number;
  active: boolean;
  last: boolean;
  onSelect: (id: number) => void;
};

export default function TravelCard({ stop, index, active, last, onSelect }: TravelCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onSelect(stop.id)}
      className={
        `relative pl-3 pr-2 py-2 flex items-start gap-2 cursor-pointer before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:rounded-r rounded-lg bg-white shadow-lg shadow-slate-900/30 ` +
        (active ? 'before:bg-blue-500 bg-blue-50' : 'before:bg-gray-200')
      }
    >
      <div className="flex flex-col items-center">
        <span
          className="rounded-full bg-blue-500 text-white flex items-center justify-center text-sm"
          style={{ width: 28, height: 28 }}
        >
          {index + 1}
        </span>
        {!last && <span className="h-full border-r-2 border-dashed border-blue-200 grow" />}
      </div>
      <div className="flex-1 text-sm">
        <div className="font-bold text-base">{stop.city}</div>
        <div className="text-xs text-gray-600">
          {dayjs(stop.date).format('MMM D')}
          {stop.time && ` – ${normalizeTime(stop.time)}`}
        </div>
        <GoogleMapsLink coords={stop.coords} className="mt-1" />
      </div>
    </motion.li>
  );
}
