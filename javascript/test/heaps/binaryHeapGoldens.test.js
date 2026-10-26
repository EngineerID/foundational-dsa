const fs = require('fs');
const path = require('path');
const { BinaryHeap } = require('../../src/heaps/binaryHeap');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/binary-heap-goldens.json'), 'utf8'),
);

describe('binary heap shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_), () => {
      const heap = new BinaryHeap();
      if (case_.inserts) {
        for (const v of case_.inserts) {
          heap.insert(v);
        }
        const order = [];
        while (heap.size() > 0) {
          order.push(heap.extractMin());
        }
        expect(order).toEqual(case_.extractOrder);
      }
      if (case_.heapify) {
        const h2 = new BinaryHeap();
        h2.heapify(case_.heapify);
        expect(h2.peek()).toBe(case_.peek);
        expect(h2.extractMin()).toBe(case_.extractMin);
      }
    });
  }
});
