// Normalizes a date string so comparisons stay consistent across the app
export function toDateOnly(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Checks whether a room is occupied on a specific day
export function isDateBooked(day, booking) {
  // Cancelled bookings should not affect occupancy calculations
  if (booking.status === "cancelled") return false;

  const checkIn = toDateOnly(booking.checkIn);
  const checkOut = toDateOnly(booking.checkOut);

  // Checkout day is excluded because the room becomes available that night
  return day >= checkIn && day < checkOut;
}

// Handles range selection in both drag directions
export function isDateInRange(date, start, end) {
  if (!start || !end) return false;

  const current = new Date(date);
  current.setHours(0, 0, 0, 0);

  const startDate = new Date(start);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(end);
  endDate.setHours(0, 0, 0, 0);

  // Allows dragging from either direction without breaking the selection logic
  const minDate = startDate < endDate ? startDate : endDate;

  const maxDate = startDate > endDate ? startDate : endDate;

  return current >= minDate && current <= maxDate;
}