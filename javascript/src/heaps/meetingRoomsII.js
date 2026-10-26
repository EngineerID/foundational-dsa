// Heaps — Meeting rooms II

/**
 * Minimum conference rooms for overlapping [start, end) meetings.
 * Technique: Sort by start + min-heap of end times
 * Invariant: Heap size is concurrent meetings after each event.
 * minMeetingRooms: Time O(n log n); Space O(n).
 */

const { PriorityQueue } = require('./priorityQueue');

function minMeetingRooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;
  const sorted = intervals.map((row) => row.slice()).sort((a, b) => a[0] - b[0]);
  const ends = new PriorityQueue((a, b) => a - b);
  for (const [start, end] of sorted) {
    if (!ends.isEmpty() && ends.peek() <= start) ends.extractMin();
    ends.insert(end);
  }
  return ends.size();
}

module.exports = { minMeetingRooms };
