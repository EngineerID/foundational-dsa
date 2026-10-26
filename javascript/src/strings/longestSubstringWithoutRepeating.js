// Strings — Longest substring without repeating characters

/**
 * Length of the longest substring with all distinct characters.
 * Technique: Sliding window with last-seen index
 * Invariant: Window [start, i] has all distinct characters.
 * lengthOfLongestSubstring: Time O(n); Space O(min(n, alphabet)).
 */

/** @param {string | null | undefined} s */
function lengthOfLongestSubstring(s) {
  if (s == null || s.length === 0) {
    return 0;
  }
  const last = new Map();
  let best = 0;
  let start = 0;
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    if (last.has(ch) && last.get(ch) >= start) {
      start = last.get(ch) + 1;
    }
    last.set(ch, i);
    best = Math.max(best, i - start + 1);
  }
  return best;
}

module.exports = { lengthOfLongestSubstring };
