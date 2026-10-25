// Strings — Suffix array (O(n log n))

/**
 * Lexicographically sorted suffix starting indices.
 * Technique: Suffix array doubling
 * Invariant: Ranks sort prefixes of length 2^k.
 * build: Time O(n log n); Space O(n).
 */

function build(s) {
  const n = s.length;
  if (n === 0) return [];
  const sa = Array.from({ length: n }, (_, i) => i);
  let rank = [...s].map((c) => c.charCodeAt(0));
  let k = 1;
  while (k < n) {
    sa.sort((a, b) => {
      const ra = rank[a];
      const rb = rank[b];
      if (ra !== rb) return ra - rb;
      const ra2 = a + k < n ? rank[a + k] : -1;
      const rb2 = b + k < n ? rank[b + k] : -1;
      return ra2 - rb2;
    });
    const newRank = new Array(n);
    newRank[sa[0]] = 0;
    for (let i = 1; i < n; i += 1) {
      const prev = sa[i - 1];
      const cur = sa[i];
      const prevKey = [rank[prev], prev + k < n ? rank[prev + k] : -1];
      const curKey = [rank[cur], cur + k < n ? rank[cur + k] : -1];
      newRank[cur] = newRank[prev] + (curKey[0] !== prevKey[0] || curKey[1] !== prevKey[1] ? 1 : 0);
    }
    rank = newRank;
    k <<= 1;
  }
  return sa;
}

module.exports = { build };
