/**
 * One location stop on the itinerary.
 */
export interface Stop {
  id: number;
  /** City name */
  city: string;
  /** ISO date string */
  date: string;
  /** Tuple of [longitude, latitude] */
  coords: [number, number];
}
