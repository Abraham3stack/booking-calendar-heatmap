import { styles } from "./calendar.styles";

function CalendarCell({
  item,
  count,
  backgroundColor,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  isSelected,
}) {
  return (
    <div
      style={{
        ...styles.cell,
        backgroundColor,
        // Days outside the current month stay visible but are visually toned down
        opacity: item.currentMonth ? 1 : 0.3,
        border: "1px solid",
        borderColor: isSelected 
          ? "#f8fafc" 
          : "#1e293b",
        // Slight scaling helps selected dates feel more interactive during drag selection
        transform: isSelected 
          ? "scale(0.97)" 
          : "scale(1)",
        cursor: "pointer",
        // Prevents accidental text highlighting while dragging across dates
        userSelect: "none",
        transition: "all 0.18s ease, filter 0.18s ease, box-shadow 0.18s ease",
        // Adds a subtle highlight so selected ranges are easier to distinguish
        boxShadow: isSelected
          ? "0 0 0 2px rgba(255,255,255,0.15)"
          : "none",
        filter: isSelected
          ? "brightness(1.08)"
          : "brightness(1)",
      }}
      onMouseDown={() => onMouseDown(item.date)}
      onMouseEnter={() => onMouseEnter(item.date)}
      onMouseUp={onMouseUp}
      // Stops the browser's default drag behavior from interfering with custom selection
      onDragStart={(e) => e.preventDefault()}
    >
      <div style={styles.dateText}>
        {item.date.getDate()}
      </div>

      <div style={styles.count}>
        {count}
      </div>
    </div>
  );
}

export default CalendarCell;