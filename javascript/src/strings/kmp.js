// Strings — Knuth-Morris-Pratt

/**
 * Find first occurrence of a pattern in text.
 * Technique: Knuth-Morris-Pratt
 * Invariant: LPS table encodes longest borders of pattern prefixes.
 * search: Time O(n + m); Space O(m).
 */

function search(text, pattern) {
  if (text == null || pattern == null) {
    return -1;
  }
  if (pattern.length === 0) {
    return 0;
  }
  if (text.length < pattern.length) {
    return -1;
  }
  const lps = buildLps(pattern);
  let i = 0;
  let j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      if (j === pattern.length) {
        return i - j;
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return -1;
}

function buildLps(pattern) {
  const lps = Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
  return lps;
}

module.exports = { search };
