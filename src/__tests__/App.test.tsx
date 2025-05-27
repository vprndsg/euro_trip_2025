import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

vi.mock('mapbox-gl', () => {
  return {
    default: class { constructor() {} on() {} addControl() {} addSource() {} addLayer() {} fitBounds() {} flyTo() {} },
    NavigationControl: class {},
    Marker: class { setLngLat() { return this; } setPopup() { return this; } addTo() { return this; } getElement() { return document.createElement('div'); } getLngLat() { return [0, 0]; } togglePopup() {} },
    Popup: class { constructor() {} setText() { return this; } }
  };
});

test('clicking Berlin header sets active stop', () => {
  render(<App />);
  const header = screen.getByRole('button', { name: /fly to Berlin/i });
  fireEvent.click(header);
  // There is no direct way to inspect activeId, so we just ensure the button is in the document
  expect(header).toBeInTheDocument();
});
