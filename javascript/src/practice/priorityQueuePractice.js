const { PriorityQueue } = require('../heaps/priorityQueue');

function extractOrder(inserts) {
  const pq = new PriorityQueue();
  for (const v of inserts) {
    pq.insert(v);
  }
  const out = [];
  while (pq.size() > 0) {
    out.push(pq.extractMin());
  }
  return out;
}

module.exports = { extractOrder };
