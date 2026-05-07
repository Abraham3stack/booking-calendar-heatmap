export const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
    
  },

  card: {
    backgroundColor: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "14px",
    padding: "0.4rem",
    transition: "all 0.2s ease",
    minHeight: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  label: {
    color: "#9ca3af",
    fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
    marginBottom: "0.5rem",
  },

  value: {
    color: "#f9fafb",
    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
    fontWeight: "700",
  },
};