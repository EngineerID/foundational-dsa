// Sorting — Merge intervals

/**
 * Merge overlapping closed intervals [start, end].
 * Technique: Sort by start, linear merge
 * Invariant: Merged list is sorted and pairwise non-overlapping.
 * mergeIntervals: Time O(n log n); Space O(n).
 */

function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];
  const sorted = intervals.map((row) => row.slice()).sort((a, b) => a[0] - b[0]);
  const merged = [sorted[0].slice()];
  for (let i = 1; i < sorted.length; i += 1) {
    const [start, end] = sorted[i];
    const last = merged[merged.length - 1];
    if (start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }
  return merged;
}

module.exports = { mergeIntervals };
