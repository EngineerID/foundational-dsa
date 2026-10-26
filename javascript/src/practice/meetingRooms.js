// Practice — Meeting rooms II

/** @param {number[][]} intervals [start, end) */
function minMeetingRooms(intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const ends = [];
  for (const [start, end] of intervals) {
    ends.sort((a, b) => a - b);
    if (ends.length > 0 && ends[0] <= start) {
      ends[0] = end;
    } else {
      ends.push(end);
    }
  }
  return ends.length;
}

module.exports = { minMeetingRooms };
