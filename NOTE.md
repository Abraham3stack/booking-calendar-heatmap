# Technical Note - Booking Calendar Heatmap

## Project Overview

The Booking Calendar Heatmap is an interactive React application designed to visualize room occupancy and booking activity using a heatmap-style calendar interface.

The application allows users to:
- Navigate between months
- Visualize occupancy intensity using color-coded cells
- Select date ranges using drag interactions
- Detect overlapping bookings
- View booking statistics in real time


The primary goal of the project was to build a responsive and interactive frontend application that simulates a real-world booking management dashboard.

---

## Open Scope Features Chosen

The following optional features were implemented to extend the core assignment requirements:

- Responsive dashboard statistics
- Responsive design improvements
- Mobile touch drag support
- Enhanced UX interactions and hover states
- Empty, loading, and error states
- Occupancy legend for heatmap readability

These additions were chosen because they improve the usability of the application as a realistic hotel booking dashboard while remaining tightly integrated with the core calendar experience.

---

## Calendar Layout Choice

The calendar uses a Sunday-to-Saturday layout because it is one of the most familiar calendar formats for users and closely matches common booking and hospitality interfaces.

This decision helped keep the interface intuitive and easier to scan visually.

---

## Trade-offs

Given the assignment timeline, priority was placed on:

- Correct occupancy calculations
- Drag selection behavior
- Responsive layout quality
- Clean component structure
- Interactive user experience

More advanced features such as backend integration, keyboard navigation, export functionality, and persistent storage were intentionally deferred in order to keep the application focused, maintainable, and polished within the available timeframe.

---

## Architecture Decisions

The application was structured into reusable and modular components to improve maintainability and scalability.

Main folders include:

- `components/` → Reusable UI components
- `utils/` → Shared helper and calculation logic
- `data/` → Mock booking data
- `styles/` → Styling and responsive layout handling

The Calendar feature was separated into smaller components such as:

- Calendar Header
- Calendar Grid
- Calendar Cell
- Selection Panel
- Legend
- Stats Dashboard

This separation made the application easier to debug, scale, and maintain.

---

## State Management

The project uses React's built-in `useState` hook for state management.

Main states handled include:

- Selected date range
- Drag selection state
- Current displayed month
- Booking data loading state
- Error handling state

A global state management library such as Redux was unnecessary because the application's state complexity remained relatively small.

---

## Heatmap Logic

The heatmap system was implemented by calculating the number of bookings active on each date.

Each calendar cell dynamically changes color depending on occupancy count:

| Occupancy | Meaning |
|-----------|----------|
| 0 | Empty |
| 1 - 2 | Low Occupancy |
| 3 - 5 | Medium Occupancy |
| 6 - 8 | High Occupancy |
| 9 - 10 | Nearly Full |

Utility functions were created to:

- Count occupancy per date
- Detect overlapping bookings
- Calculate selected range duration
- Format and compare dates efficiently

This logic was separated into utility files to improve readability and reusability.

---

## Drag Selection System

One of the main interactive features of the project is the drag-to-select functionality.

Users can:
- Click and drag across multiple dates on desktop
- Drag-select dates using touch gestures on mobile devices
- Select booking ranges dynamically in both forward and backward directions
- Instantly see overlapping bookings and statistics

Special attention was given to preventing accidental selections and drag bugs.

Improvements implemented include:
- Disabling text selection while dragging
- Better mouse release handling
- Preventing unintended auto-selection issues
- Smoother desktop and mobile drag interactions
- Preventing accidental mobile scrolling during touch dragging

---

## Responsive Design Strategy

The application was designed to work across:

- Mobile devices
- Tablets
- Desktop screens

Responsive techniques used include:

- CSS Grid layouts
- Flexible card layouts
- Responsive typography using `clamp()`
- Adaptive spacing
- Responsive navigation controls
- Wrapping occupancy legends
- Mobile touch gesture support

A hybrid styling approach was used:

- Inline JavaScript style objects for component styling
- CSS files for media queries and responsive layouts

This approach helped balance flexibility and responsiveness.

---

## Challenges Faced

Several frontend and UX challenges were encountered during development.

### 1. Drag Selection Bugs

An issue occurred where moving the mouse after clicking a date caused unintended automatic selections.

This was solved by improving drag state handling and mouse event logic.

### 2. Auto Scroll During Selection

The page automatically scrolled when the selection panel appeared after selecting dates.

The issue was resolved by adjusting layout positioning and rendering behavior.

### 3. Overlapping Booking Count Mismatch

The overlapping booking count initially produced inaccurate results.

The overlap detection logic was reviewed and corrected using proper date comparison utilities.

### 4. Responsive Calendar Scaling

Maintaining readability across desktop, tablet, and mobile devices required multiple layout adjustments.

This included:
- Responsive stats cards
- Flexible calendar sizing
- Responsive header controls
- Better legend wrapping
- Improved mobile spacing
- Supporting touch-based drag interactions without breaking desktop behavior

---

## Performance Considerations

The project keeps performance lightweight by:

- Using utility functions for calculations
- Avoiding unnecessary global state
- Keeping components modular
- Minimizing unnecessary re-renders
- Avoiding heavy external UI libraries

The application remains fast and responsive even with interactive drag operations.

---

## Future Improvements

Potential future improvements include:

- Backend integration
- Real-time booking API
- Authentication system
- Room filtering
- Booking creation modal
- Analytics dashboard
- Admin controls
- Exportable reports

---

## Key Learnings

This project improved understanding of:

- React component architecture
- State management
- Responsive frontend design
- Drag interaction handling
- Calendar and date logic
- UX problem solving
- Real-world UI refinement

It also provided practical experience building a responsive dashboard-like interface without relying heavily on third-party UI frameworks.

---

## Conclusion

The Booking Calendar Heatmap project successfully demonstrates the development of a responsive and interactive frontend application using React.

The project combines:
- Interactive date selection
- Occupancy visualization
- Dashboard statistics
- Responsive layouts
- Real-world UX improvements

The final result is a polished frontend application that simulates realistic booking management interactions while maintaining strong responsiveness and usability across devices.