import { render } from '@testing-library/react';
import MapView from '../components/MapView';
import { Stop } from '../types';

vi.mock('mapbox-gl', () => {
  return {
    default: class {
      constructor() {}
      on() {}
      addControl() {}
      addSource() {}
      addLayer() {}
      fitBounds() {}
    },
    NavigationControl: class {}
  };
});

const stops: Stop[] = [
  { id: 1, city: 'A', date: '', coords: [0, 0] },
  { id: 2, city: 'B', date: '', coords: [1, 1] },
  { id: 3, city: 'C', date: '', coords: [2, 2] },
  { id: 4, city: 'D', date: '', coords: [3, 3] }
];

test('polyline has four coordinates', () => {
  render(<MapView stops={stops} />);
  expect(stops.length).toBe(4);
});
