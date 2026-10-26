// Practice — Binary min-heap extract order

const { BinaryHeap } = require('../heaps/binaryHeap');

function extractOrder(inserts) {
  const heap = new BinaryHeap();
  for (const v of inserts) {
    heap.insert(v);
  }
  const out = [];
  while (heap.size() > 0) {
    out.push(heap.extractMin());
  }
  return out;
}

module.exports = { extractOrder };
