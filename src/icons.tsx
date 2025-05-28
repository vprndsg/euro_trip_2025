import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 18H7a4 4 0 1 1 0-8 5 5 0 0 1 9.9 1A4 4 0 1 1 17 18z" />
    </svg>
  );
}

export function CloudRainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 17H7a4 4 0 1 1 0-8 5 5 0 0 1 9.9 1A4 4 0 1 1 17 17z" />
      <path d="M8 20v.01M12 20v.01M16 20v.01" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 3h3v3" />
      <path d="M11 13l9-9" />
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
    </svg>
  );
}
