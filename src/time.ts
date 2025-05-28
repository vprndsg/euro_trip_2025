export function normalizeTime(value: string, to12h = false): string {
  const clean = value.trim().replace(/\s+/g, '').toLowerCase();
  // remove am/pm for easier parsing
  const withoutPeriod = clean.replace(/am|pm/, '');
  const [hourStr, minuteStr] = withoutPeriod.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr || '0', 10);

  if (clean.endsWith('pm') && hour < 12) {
    hour += 12;
  } else if (clean.endsWith('am') && hour === 12) {
    hour = 0;
  }

  if (to12h) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const twelveHour = hour % 12 || 12;
    return `${twelveHour}:${minute.toString().padStart(2, '0')} ${period}`;
  }

  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}
