// Heaps — Priority Queue (min)

/** Min-priority queue backed by BinaryHeap.
 * insert/extractMin/decreaseKey O(log n); peek O(1).
 */

const { BinaryHeap } = require('./binaryHeap');

class PriorityQueue {
  constructor(compare) {
    this._heap = new BinaryHeap(compare);
  }

  insert(value) {
    this._heap.insert(value);
  }

  peek() {
    return this._heap.peek();
  }

  extractMin() {
    return this._heap.extractMin();
  }

  decreaseKey(index, newValue) {
    this._heap.decreaseKey(index, newValue);
  }

  isEmpty() {
    return this._heap.size() === 0;
  }

  size() {
    return this._heap.size();
  }

  heap() {
    return this._heap;
  }
}

module.exports = { PriorityQueue };
