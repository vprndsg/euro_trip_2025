import React from 'react';
import { ExternalLinkIcon } from '../icons';

export type GoogleMapsLinkProps = {
  coords: [number, number];
  className?: string;
};

export default function GoogleMapsLink({ coords, className }: GoogleMapsLinkProps) {
  const url = `https://www.google.com/maps/search/?api=1&query=${coords[1]},${coords[0]}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 hover:text-blue-500 ${className || ''}`.trim()}
    >
      <span className="sr-only">Open in Google Maps</span>
      <ExternalLinkIcon className="w-4 h-4" />
    </a>
  );
}
