/**
 * One location stop on the itinerary.
 */
export interface Stop {
  id: number;
  /** City name */
  city: string;
  /** ISO date string */
  date: string;
  /** Optional time string. Can be 12h or 24h format. */
  time?: string;
  /** Tuple of [longitude, latitude] */
  coords: [number, number];
}
