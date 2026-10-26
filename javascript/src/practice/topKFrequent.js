// Practice — Top K frequent elements

const { BinaryHeap } = require('../heaps/binaryHeap');

/** @param {number[]} nums @param {number} k */
function topKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  const heap = new BinaryHeap((a, b) => {
    if (a.freq !== b.freq) {
      return a.freq < b.freq ? -1 : 1;
    }
    if (a.num !== b.num) {
      return a.num < b.num ? -1 : 1;
    }
    return 0;
  });
  for (const [num, freq] of counts) {
    heap.insert({ num, freq });
    if (heap.size() > k) {
      heap.extractMin();
    }
  }
  const out = [];
  while (heap.size() > 0) {
    out.push(heap.extractMin());
  }
  out.sort((a, b) => (b.freq - a.freq) || (a.num - b.num));
  return out.map((x) => x.num);
}

module.exports = { topKFrequent };
