import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

export default function DayHeader({ date }: { date: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio === 1);
      },
      { threshold: 1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h3
      ref={ref}
      className={
        'sticky top-0 z-20 bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold flex items-center justify-center transition-opacity h-12 ' +
        (visible ? 'opacity-100' : 'opacity-0')
      }
    >
      {dayjs(date).format('MMM D, ddd')}
    </h3>
  );
}
