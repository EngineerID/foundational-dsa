const { PriorityQueue } = require('../../src/heaps/priorityQueue');

describe('PriorityQueue', () => {
  test('extracts in priority order', () => {
    const pq = new PriorityQueue();
    pq.insert('b');
    pq.insert('a');
    expect(pq.extractMin()).toBe('a');
    expect(pq.extractMin()).toBe('b');
    expect(pq.isEmpty()).toBe(true);
  });

  test('peek without removal', () => {
    const pq = new PriorityQueue();
    pq.insert(10);
    pq.insert(5);
    expect(pq.peek()).toBe(5);
    expect(pq.size()).toBe(2);
  });

  test('empty queue throws on peek', () => {
    const pq = new PriorityQueue();
    expect(pq.isEmpty()).toBe(true);
    expect(() => pq.peek()).toThrow('Heap is empty');
  });

  test('decreaseKey via backing heap', () => {
    const pq = new PriorityQueue();
    pq.insert(7);
    pq.insert(3);
    pq.decreaseKey(0, 1);
    expect(pq.extractMin()).toBe(1);
  });

  test('exposes backing heap', () => {
    const pq = new PriorityQueue();
    pq.insert(4);
    expect(pq.heap().size()).toBe(1);
  });
});
