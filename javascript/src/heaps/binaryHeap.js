// Heaps — Binary Min-Heap

/**
 * Array-based binary heap (min or max) with heapify operations.
 * Technique: Binary heap
 * Invariant: Parent <= children (min-heap) or >= (max-heap) at all indices.
 * insert/extract/peek: Time O(log n); buildHeap O(n); Space O(n).
 */

class BinaryHeap {
  constructor(compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
    this._heap = [];
    this._compare = compare;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    if (this._heap.length === 0) {
      throw new Error('Heap is empty');
    }
    return this._heap[0];
  }

  insert(value) {
    this._heap.push(value);
    this._siftUp(this._heap.length - 1);
  }

  extractMin() {
    if (this._heap.length === 0) {
      throw new Error('Heap is empty');
    }
    const min = this._heap[0];
    const last = this._heap.pop();
    if (this._heap.length > 0) {
      this._heap[0] = last;
      this._siftDown(0);
    }
    return min;
  }

  decreaseKey(index, newValue) {
    if (index < 0 || index >= this._heap.length) {
      throw new RangeError(String(index));
    }
    if (this._compare(newValue, this._heap[index]) > 0) {
      throw new Error('New value must not be greater');
    }
    this._heap[index] = newValue;
    this._siftUp(index);
  }

  indexOf(value) {
    return this._heap.indexOf(value);
  }

  heapify(items) {
    this._heap = [...items];
    for (let i = this._parent(this._heap.length - 1); i >= 0; i--) {
      this._siftDown(i);
    }
  }

  _siftUp(index) {
    while (index > 0) {
      const parent = this._parent(index);
      if (this._compare(this._heap[index], this._heap[parent]) >= 0) {
        break;
      }
      this._swap(index, parent);
      index = parent;
    }
  }

  _siftDown(index) {
    const n = this._heap.length;
    while (true) {
      const left = this._leftChild(index);
      const right = this._rightChild(index);
      let smallest = index;
      if (left < n && this._compare(this._heap[left], this._heap[smallest]) < 0) {
        smallest = left;
      }
      if (right < n && this._compare(this._heap[right], this._heap[smallest]) < 0) {
        smallest = right;
      }
      if (smallest === index) {
        break;
      }
      this._swap(index, smallest);
      index = smallest;
    }
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _leftChild(i) {
    return 2 * i + 1;
  }

  _rightChild(i) {
    return 2 * i + 2;
  }

  _swap(i, j) {
    const t = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = t;
  }
}

module.exports = { BinaryHeap };
