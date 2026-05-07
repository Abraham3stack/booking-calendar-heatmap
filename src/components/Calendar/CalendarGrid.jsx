import CalendarCell from "./CalendarCell";
import { styles } from "./calendar.styles";
import { isDateInRange } from "../../utils/date";

// Calendar uses a Sunday-to-Saturday layout for familiarity
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarGrid({
  days,
  occupancy,
  getHeatColor,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  selectedRange,
}) {

  return (
    <>
      <div style={styles.weekRow}>
        {DAY_LABELS.map((d) => (
          <div
            key={d}
            style={styles.weekCell}
          >
            {d}
          </div>
        ))}
      </div>

      <div style={styles.grid}>
        {days.map((item) => {
          // Converts the date into a consistent key format for occupancy lookups
          const dateStr = item.date.toISOString().split("T")[0];

          // Defaults to 0 when no rooms are occupied on that date
          const count = occupancy[dateStr] ?? 0;

          // Checks whether the current cell falls inside the active drag selection
          const isSelected = isDateInRange(
            item.date,
            selectedRange.start,
            selectedRange.end
          );

          return (
            <CalendarCell 
              key={dateStr}
              item={item}
              count={count}
              backgroundColor={getHeatColor(count)}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseUp={onMouseUp}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </>
  );
}

export default CalendarGrid;