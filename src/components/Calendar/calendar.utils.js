import { isDateBooked } from "../../utils/date"

export function getCalendarDays(year, month) {
  const days = [];

  // First day of the month
  const firstDay = new Date(year, month, 1);

  // What day of the week it falls on (0 = sunday)
  const startDay = firstDay.getDay();

  // ========== Add PREVIOUS month days ==========
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push({
      date: d,
      currentMonth: false,
    });
  }

  // ========== Add CURRENT month days ==========
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= lastDate; i++) {
    const d = new Date(year, month, i);
    days.push({
      date: d,
      currentMonth: true,
    });
  }

  // ========== Add NEXT month days ==========
  while (days.length < 42) {
    const last = days[days.length - 1].date;
    const next = new Date(last);
    next.setDate(last.getDate() + 1);

    days.push({
      date: next,
      currentMonth: false,
    });
  }

  return days
}

// ===== Occupancy Logic =====
export function getOccupancyMap(days, bookings) {
  const map = {};

  for (const item of days) {
    const day = new Date(item.date);
    day.setHours(0, 0, 0, 0);

    // Normalize key
    const key = day.toISOString().split("T")[0];

    let count = 0;

    for (const booking of bookings) {
      if (isDateBooked(day, booking)) {
        count++;
      }
    }

    map[key] = count;
  }

  return map;
}