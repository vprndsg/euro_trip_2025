import { describe, it, expect } from 'vitest';
import { normalizeTime } from '../time';

describe('normalizeTime', () => {
  it('strips AM/PM in 24h mode', () => {
    expect(normalizeTime('17:31 PM')).toBe('17:31');
    expect(normalizeTime('8:05am')).toBe('08:05');
  });

  it('converts to 12h when requested', () => {
    expect(normalizeTime('17:31', true)).toBe('5:31 PM');
    expect(normalizeTime('00:15', true)).toBe('12:15 AM');
  });
});
