const { BinaryHeap } = require('../../src/heaps/binaryHeap');

describe('BinaryHeap', () => {
  test('insert and extractMin', () => {
    const heap = new BinaryHeap();
    heap.insert(5);
    heap.insert(2);
    heap.insert(8);
    expect(heap.extractMin()).toBe(2);
    expect(heap.peek()).toBe(5);
  });

  test('heapify and decreaseKey', () => {
    const heap = new BinaryHeap();
    heap.heapify([9, 4, 7, 1, 3]);
    expect(heap.peek()).toBe(1);
    heap.decreaseKey(0, 0);
    expect(heap.extractMin()).toBe(0);
  });

  test('empty extract throws', () => {
    const heap = new BinaryHeap();
    expect(() => heap.extractMin()).toThrow('Heap is empty');
  });

  test('decreaseKey invalid index', () => {
    const heap = new BinaryHeap();
    heap.insert(1);
    expect(() => heap.decreaseKey(5, 0)).toThrow();
  });

  test('decreaseKey increase rejected', () => {
    const heap = new BinaryHeap();
    heap.insert(3);
    expect(() => heap.decreaseKey(0, 10)).toThrow('New value must not be greater');
  });
});
