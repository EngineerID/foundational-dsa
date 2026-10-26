// Practice — Longest substring without repeating characters

/** @param {string} s */
function lengthOfLongestSubstring(s) {
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
