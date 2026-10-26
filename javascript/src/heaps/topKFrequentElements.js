// Heaps — Top K frequent elements

/**
 * K most frequent integers (frequency desc, then value asc).
 * Technique: Size-k min-heap by frequency
 * Invariant: Heap holds the k best candidates seen so far.
 * topKFrequent: Time O(n log k); Space O(n).
 */

const { BinaryHeap } = require('./binaryHeap');

function topKFrequent(nums, k) {
  if (!nums || nums.length === 0 || k <= 0) throw new Error('invalid input');
  const counts = new Map();
  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  if (k > counts.size) throw new Error('k exceeds distinct count');
  const heap = new BinaryHeap((a, b) => {
    if (a.freq !== b.freq) return a.freq < b.freq ? -1 : 1;
    if (a.num !== b.num) return a.num < b.num ? -1 : 1;
    return 0;
  });
  for (const [num, freq] of counts) {
    heap.insert({ num, freq });
    if (heap.size() > k) heap.extractMin();
  }
  const out = [];
  while (heap.size() > 0) out.push(heap.extractMin());
  out.sort((a, b) => (b.freq - a.freq) || (a.num - b.num));
  return out.map((x) => x.num);
}

module.exports = { topKFrequent };
