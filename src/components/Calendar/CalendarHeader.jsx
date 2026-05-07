function CalendarHeader({
  monthLabel,
  goPrevMonth,
  goNextMonth,
  goToday,
}) {
  // Header controls used for navigating between calendar months
  return (
    <div style={{
      display: "flex",
      // Keeps navigation controls evenly spaced across different screen sizes
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
      gap: "10px",
      padding: "10px 20px",
    }}
    >
      {/* Moves the calendar view to the previous month */}
      <button
        onClick={goPrevMonth}
        title="Previous Month"
        style={{
          width: "clamp(32px, 6vw, 42px)",
          height: "clamp(32px, 6vw, 42px)",
          borderRadius: "10px",
          border: "1px solid #334155",
          backgroundColor: "#111827",
          color: "#ffffff",
          cursor: "pointer",
          fontSize: "clamp(0.8rem, 2vw, 1rem)",
          transition: "0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        ←
      </button>

      {/* Displays the currently active month and year */}
      <h2 style={{
        fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
        fontWeight: "600",
        color: "#ffffff",
        margin: "0 10px",
      }}
      >
        {monthLabel}
      </h2>

      {/* Moves the calendar view to the next month */}
      <button
        onClick={goNextMonth}
        title="Next Month"
        style={{
          width: "clamp(32px, 6vw, 42px)",
          height: "clamp(32px, 6vw, 42px)",
          borderRadius: "10px",
          border: "1px solid #334155",
          backgroundColor: "#111827",
          color: "#ffffff",
          cursor: "pointer",
          fontSize: "clamp(0.8rem, 2vw, 1rem)",
          transition: "0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        →
      </button>

      {/* Quickly resets the calendar back to the current month */}
      <button
        onClick={goToday}
        style={{
          padding: "6px 14px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#22c55e",
          color: "#ffffff",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          marginLeft: "auto",
        }}
      >
        Today
      </button>
    </div>
  );
}

export default CalendarHeader