import { render, screen } from '@testing-library/react';
import ItineraryBottomSheet from '../components/ItineraryBottomSheet';
import { Stop } from '../types';

const stops: Stop[] = [
  { id: 1, city: 'Berlin', date: '2025-06-14', time: '17:31 PM', coords: [0, 0] },
  { id: 2, city: 'Bern', date: '2025-06-15', time: '08:00', coords: [1, 1] }
];

test('renders city names and dates', () => {
  render(
    <ItineraryBottomSheet
      stops={stops}
      activeId={null}
      onSelect={() => {}}
      onClose={() => {}}
    />
  );
  expect(screen.getByText('Berlin')).toBeInTheDocument();
  expect(screen.getByText('Bern')).toBeInTheDocument();
  expect(screen.getByText(/Jun 14.*17:31/)).toBeInTheDocument();
  expect(screen.getByText(/Jun 15.*08:00/)).toBeInTheDocument();
});
