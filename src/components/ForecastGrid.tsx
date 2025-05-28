import React from 'react';

export type DayForecast = {
  day: string;
  condition: string;
  icon: string;
};

type Props = {
  forecast: DayForecast[];
};

export default function ForecastGrid({ forecast }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 pb-4">
      {forecast.map(f => (
        <div
          key={f.day}
          className="rounded-xl shadow bg-white p-2 text-center text-sm"
        >
          <div className="font-semibold mb-1">{f.day}</div>
          <div className="flex items-center justify-center gap-1 text-gray-700">
            <span className="text-base" aria-hidden="true">
              {f.icon}
            </span>
            <span>{f.condition}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
