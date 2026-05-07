import { useState, useEffect } from "react";
import "./App.css"
import SelectionPanel from "./components/Calendar/SelectionPanel";
import Calendar from "./components/Calendar/Calendar";
import { getTotalSelectedDays } from "./utils/selection";
import StatsHeader from "./components/Stats/StatsHeader";
import Legend from "./components/Legend/Legend";

function App() {
  // Stores the currently selected calendar range from drag interactions
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });

  // Holds booking data loaded from the JSON file
  const [bookings, setBookings] = useState([]);

  // Tracks whether booking data is still being fetched
  const [loading, setLoading] = useState(true);

  // Stores fetch or parsing errors when loading booking data fails
  const [error, setError] = useState(null);

  // Loads booking data from the public folder when the app starts
  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true);

        const response = await fetch("/bookings.json");

        // Prevents invalid responses from silently breaking the app
        if (!response.ok) {
          throw new Error("Failed to load bookings");
        }

        const data = await response.json();

        setBookings(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load booking data.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  // Calculates how many days are currently selected in the calendar
  const totalDays = getTotalSelectedDays(selectedRange);

   // Displays a simple loading state while booking data is being fetched
  if (loading) {
    return <p>Loading bookings...</p>;
  }

  // Shows a fallback message if booking data fails to load
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app">
      <h1>Booking Calendar Heatmap</h1>

      <StatsHeader bookings={bookings} />

      <Legend />

      <Calendar 
        bookings={bookings}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />

      <SelectionPanel 
        startDate={selectedRange.start}
        endDate={selectedRange.end}
        totalDays={totalDays}
        bookings={bookings}
      />
    </div>
  );
}

export default App;