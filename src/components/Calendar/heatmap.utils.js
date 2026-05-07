export function getHeatColor(count) {

  // 0 Occupancy → Empty
  if (count === 0) return "#0b1220";

  // 1 - 2 Rooms → Very Low Occupancy
  if (count <= 2) return "#123524";

  // 3 - 5 Rooms → Medium Occupancy
  if (count <= 5) return "#15803d";

  // 6 - 8 Rooms → High Occupancy
  if (count <= 8) return "#22c55ef0";

  // 9 - 10 Rooms → Nearly Full / Full
  return "#83cc16e1";
}