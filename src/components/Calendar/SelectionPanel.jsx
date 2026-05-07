import { isDateBooked } from "../../utils/date";

function SelectionPanel({
  startDate,
  endDate,
  totalDays,
  bookings,
}) {

  // Hides the panel until a valid date range is selected
  if (!startDate || !endDate) {
    return null;
  }

  // Ensures the selected range works correctly even when dragging backwards
  const start = startDate < endDate
    ? new Date(startDate)
    : new Date(endDate);

  const end = startDate > endDate
    ? new Date(startDate)
    : new Date(endDate);

  // Removes time values so date comparisons stay accurate
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  // Finds bookings that overlap with the currently selected range
  const overlappingBookings = bookings.filter((booking) => {

    // Cancelled bookings should not appear in occupancy or overlap results
    if (booking.status === "cancelled") {
      return false;
    }

    // Handles a simple click selection without dragging
    if (start.getTime() === end.getTime()) {
      return isDateBooked(start, booking);
    }

    // Checks every day in the selected range for booking overlap
    let currentDay = new Date(start);

    while (currentDay <= end) {
      if (isDateBooked(currentDay, booking)) {
        return true;
      }

      currentDay.setDate(currentDay.getDate() + 1);
    }

    return false;
  });

  return (
    <div 
      className="selection-panel"
      style={{
        marginTop: "32px",
        padding: "24px",
        border: "1px solid #2a2f45",
        borderRadius: "16px",
        backgroundColor: "#0f172a",
      }}
    >

      <h2>Selected Range</h2>

      <p>
        <strong>Start:</strong>{" "}
        {start.toDateString()}
      </p>

      <p>
        <strong>End:</strong>{" "}
        {endDate.toDateString()}
      </p>

      <p>
        <strong>Total Days:</strong>{" "}
        {totalDays}
      </p>

      <hr />

      <h3 style={{ marginBottom: "24px"}}>
        Overlapping Bookings (
        {overlappingBookings.length})
      </h3>

      {overlappingBookings.length === 0 && (
        <p>No bookings found for this range.</p>
      )}

      {overlappingBookings.map((booking) => {

        // Calculates how many nights the guest stayed between check-in and check-out
        const nights =
          (
            new Date(booking.checkOut) -
            new Date(booking.checkIn)
          ) /
          (1000 * 60 * 60 * 24);

        return (
          <div
            key={booking.id}
            className="booking-card"
            style={{
              marginBottom: "20px",
              padding: "16px",
              border: "1px solid #2a2f45",
              borderRadius: "12px",
              backgroundColor: "#111827",
              textAlign: "left",
            }}
          >
            <p>
              <strong>Guest:</strong>{" "}
              {booking.guestName}
            </p>

            <p>
              <strong>Room:</strong>{" "}
              {booking.roomNumber}
            </p>

            <p>
              <strong>Check In:</strong>{" "}
              {booking.checkIn}
            </p>

            <p>
              <strong>Check Out:</strong>{" "}
              {booking.checkOut}
            </p>

            <p>
              <strong>Nights:</strong>{" "}
              {nights}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {booking.status}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SelectionPanel;