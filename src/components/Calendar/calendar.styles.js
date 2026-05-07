export const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
    padding: "20px",
  },

  cell: {
    border: "1px solid #ccc",
    minHeight: "clamp(55px, 8vw, 70px)",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "clamp(10px, 1.8vw, 14px)",
  },

  count: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#cbd5e1",
  },

  dateText: {
    fontSize: "14px",
    color: "#f8fafb",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  title: {
    margin: "0 6px",
    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
    lineHeight: "1.1",
    textAlign: "center",
  },

  todayBtn: {
    padding: "0.5rem 1rem",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
  },

  weekRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    padding: "0 20px",
  },

  weekCell: {
    fontWeight: "bold",
    textAlign: "center",
  },
};