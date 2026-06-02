const { BinaryHeap } = require('../../src/heaps/binaryHeap');
const { PROPERTY_TRIALS, seededRng, heapMinInvariant } = require('../_propertyHelpers');

describe('property heaps', () => {
  test('min-heap invariant and extract order', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const heap = new BinaryHeap();
      const n = Math.floor(rng() * 40);
      for (let i = 0; i < n; i++) {
        heap.insert(Math.floor(rng() * 61) - 30);
        expect(heapMinInvariant(heap._heap)).toBe(true);
      }
      const out = [];
      while (heap.size() > 0) {
        out.push(heap.extractMin());
        expect(heapMinInvariant(heap._heap)).toBe(true);
      }
      for (let i = 1; i < out.length; i++) {
        expect(out[i]).toBeGreaterThanOrEqual(out[i - 1]);
      }
    }
  });
});
