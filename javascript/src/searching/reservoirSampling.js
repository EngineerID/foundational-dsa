// Searching — Reservoir sampling

/**
 * Uniform random sample of size k from a stream.
 * Technique: Reservoir sampling
 * Invariant: Reservoir is uniform k-subset of items seen.
 * sample: Time O(n); Space O(k).
 */

function sample(stream, k, seed = 0) {
  if (k < 0) throw new Error('k must be non-negative');
  if (k === 0) return [];
  let state = seed;
  const rand = () => {
    state = (state * 48271) % 2147483647;
    return state;
  };
  const res = stream.slice(0, k);
  for (let i = k; i < stream.length; i += 1) {
    const j = rand() % (i + 1);
    if (j < k) res[j] = stream[i];
  }
  return res;
}

module.exports = { sample };
