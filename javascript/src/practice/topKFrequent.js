// Practice — Top K frequent elements

/** @param {number[]} nums @param {number} k */
function topKFrequent(nums, k) {
  if (!nums || nums.length === 0 || k <= 0) {
    throw new Error('invalid input');
  }
  const counts = new Map();
  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  const entries = [...counts.entries()].map(([num, freq]) => ({ num, freq }));
  entries.sort((a, b) => (b.freq - a.freq) || (a.num - b.num));
  return entries.slice(0, k).map((x) => x.num);
}

module.exports = { topKFrequent };
