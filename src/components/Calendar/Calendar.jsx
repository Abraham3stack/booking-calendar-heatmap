import { getCalendarDays, getOccupancyMap } from "./calendar.utils";
import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { getHeatColor } from "./heatmap.utils";

function Calendar({
  bookings,
  selectedRange,
  setSelectedRange,
}) {

  // Stores the currently visible month in the calendar
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  // Tracks drag interactions for range selection
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartDate, setDragStartDate] = useState(null);

  // Extracts the active month and year from the current view
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 

  // Builds the full calendar grid including overflow days
  const days = getCalendarDays(year, month);

  // Calculates how many rooms are occupied for each visible day
  const occupancy = getOccupancyMap(days, bookings);

  // Formats the month and year shown in the calendar header
  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Moves the calendar view one month backward
  function goPrevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  // Moves the calendar view one month forward
  function goNextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  // Resets the calendar view back to the current month
  function goToday() {
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
  }

  // Mouse events used for drag-to-select interactions
  // Starts a new date range selection
  function handleMouseDown(date) {
    setIsDragging(true);

    setDragStartDate(date);

    setSelectedRange({
      start: date,
      end: date,
    });
  }

  // Expands the selected range while dragging across cells
  function handleMouseEnter(date) {
    if (!isDragging) return;

    setSelectedRange({
      start: dragStartDate,
      end: date,
    });
  }

  // Ends the drag interaction once the mouse is released
  function handleMouseUp() {
    setIsDragging(false);
    setDragStartDate(null);
  }

  // Prevents the drag state from getting stuck if the mouse is released outside the calendar
  useEffect(() => {
    function stopDragging() {
      setIsDragging(false);
      setDragStartDate(null);
    }

    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mouseup", stopDragging);
    };
  }, []);

  return (
    <div onMouseLeave={handleMouseUp}>
      <CalendarHeader 
        monthLabel={monthLabel}
        goPrevMonth={goPrevMonth}
        goNextMonth={goNextMonth}
        goToday={goToday}
      />

      <CalendarGrid 
        days={days}
        occupancy={occupancy}
        getHeatColor={getHeatColor}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        selectedRange={selectedRange}
      />
    </div>
  );
}

export default Calendar