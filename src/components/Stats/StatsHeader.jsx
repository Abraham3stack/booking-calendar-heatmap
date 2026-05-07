import { useEffect, useState } from "react";
import { styles } from "./stats.styles";
import "./stats.css";

function StatsHeader({ bookings = [] }) {
  // Small counting animation used to make dashboard stats feel more dynamic
  function useCountAnimation(target, duration = 1000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;

      // Updates roughly every frame for a smoother counting effect
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, duration]);

    return count;
  }

  // Counts every booking loaded into the dashboard
  const totalBookings = bookings.length;

  // Only confirmed bookings are included in this metric
  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "confirmed"
  ).length;

  // Tracks how many bookings were cancelled
  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "cancelled"
  ).length;

  // Uses active bookings to estimate how occupied the hotel is overall
  const activeBookings = bookings.filter(
    (booking) => booking.status !== "cancelled"
  );

  const avgOccupancy = Math.round(
    (activeBookings.length / 10)
  );

  // Animated values make the stats section feel more interactive on load
  const animatedTotalBookings = useCountAnimation(totalBookings);
  const animatedConfirmedBookings = useCountAnimation(confirmedBookings);
  const animatedCancelledBookings = useCountAnimation(cancelledBookings);
  const animatedAvgOccupancy = useCountAnimation(avgOccupancy);

  return (
    <section className="stats-wrapper">
      <div style={styles.card}>
        <p style={styles.label}>Total Bookings</p>
        <h2 style={styles.value}>{animatedTotalBookings}</h2>
      </div>

      <div style={styles.card}>
        <p style={styles.label}>Avg Occupancy</p>
        <h2 style={styles.value}>{animatedAvgOccupancy}%</h2>
      </div>

      <div style={styles.card}>
        <p style={styles.label}>Confirmed</p>
        <h2 style={styles.value}>{animatedConfirmedBookings}</h2>
      </div>

      <div style={styles.card}>
        <p style={styles.label}>Cancelled</p>
        <h2 style={styles.value}>{animatedCancelledBookings}</h2>
      </div>
    </section>
  );
}

export default StatsHeader;