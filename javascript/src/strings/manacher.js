// Strings — Manacher (longest palindrome)

/**
 * Longest palindromic substring length.
 * Technique: Manacher
 * Invariant: Radius array mirrors palindrome centers.
 * longestPalindromeLength: Time O(n); Space O(n).
 */

function longestPalindromeLength(s) {
  if (!s) return 0;
  const t = `|${[...s].join('|')}|`;
  const n = t.length;
  const p = new Array(n).fill(0);
  let center = 0;
  let right = 0;
  let best = 0;
  for (let i = 0; i < n; i += 1) {
    const mirror = 2 * center - i;
    if (i < right) p[i] = Math.min(right - i, p[mirror]);
    while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t[i + p[i] + 1] === t[i - p[i] - 1]) {
      p[i] += 1;
    }
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
    best = Math.max(best, p[i]);
  }
  return best;
}

module.exports = { longestPalindromeLength };
