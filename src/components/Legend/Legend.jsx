import { styles } from "./legend.styles";


function Legend() {
  const legendItems = [
    {
      label: "0",
      color: "#0b1220",
    },
    {
      label: "1 - 2",
      color: "#123524",
    },
    {
      label: "3 - 5",
      color: "#15803d",
    },
    {
      label: "6 - 8",
      color: "#22c55ef0",
    },
    {
      label: "9 - 10",
      color: "#83cc16e1",
    },
  ];

  return (
    <section style={styles.wrapper}>
      <p style={styles.title}>Occupancy Level</p>

      <div style={styles.legendContainer}>
        {legendItems.map((item) => (
          <div
            key={item.label}
            style={styles.legendItem}
          >
            <div
              style={{
                ...styles.colorBox,
                backgroundColor: item.color,
              }}
            />

            <span style={styles.label}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Legend;