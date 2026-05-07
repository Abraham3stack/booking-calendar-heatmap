// Calculates how many days are included in the selected calendar range
export function getTotalSelectedDays(selectedRange) {
  if (!selectedRange.start || !selectedRange.end) {
    return 0;
  }

  const start = new Date(selectedRange.start);
  const end = new Date(selectedRange.end);

  // Supports both forward and backward drag selections
  const minDate = start < end ? start : end;
  const maxDate = start > end ? start : end;

  // Difference is returned in milliseconds, so it needs conversion to days
  const diffTime = maxDate - minDate;

  // +1 makes the range inclusive so selecting the same day returns 1 instead of 0
  return(
    Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  );
}