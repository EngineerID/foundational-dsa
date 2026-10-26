const fs = require('fs');
const path = require('path');
const { PriorityQueue } = require('../../src/heaps/priorityQueue');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/priority-queue-goldens.json'),
    'utf8',
  ),
);

describe('priority queue shared goldens', () => {
  for (const case_ of goldens) {
    test('extract order', () => {
      const pq = new PriorityQueue();
      for (const v of case_.inserts) pq.insert(v);
      const order = [];
      while (pq.size() > 0) order.push(pq.extractMin());
      expect(order).toEqual(case_.extractOrder);
    });
  }
});
