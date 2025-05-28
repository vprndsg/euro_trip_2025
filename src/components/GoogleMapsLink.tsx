import React from 'react';

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
      className={`inline-flex items-center gap-1 group hover:text-blue-500 ${className || ''}`.trim()}
    >
      <span className="sr-only">Open in Google Maps</span>
      <ExternalLinkIcon className="w-4 h-4 transition-transform md:group-hover:scale-110" />
    </a>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 3h3v3" />
      <path d="M11 13l9-9" />
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
    </svg>
  );
}
