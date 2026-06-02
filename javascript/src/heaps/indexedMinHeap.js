// Heaps — Indexed min-heap (for Dijkstra decreaseKey by vertex id)

/** Min-heap supporting decreaseKey by vertex/id index.
 * insert/extractMin/decreaseKey O(log n); Space: O(n).
 */

class IndexedMinHeap {
  constructor(capacity) {
    this._heap = new Array(capacity).fill(0);
    this._pos = new Array(capacity).fill(-1);
    this._keys = new Array(capacity).fill(0);
    this._size = 0;
  }

  insert(vertex, key) {
    if (this._pos[vertex] === -1) {
      this._heap[this._size] = vertex;
      this._pos[vertex] = this._size;
      this._keys[vertex] = key;
      this._size += 1;
      this._siftUp(this._size - 1);
    } else {
      this.decreaseKey(vertex, key);
    }
  }

  decreaseKey(vertex, key) {
    const i = this._pos[vertex];
    this._keys[vertex] = key;
    this._siftUp(i);
  }

  isEmpty() {
    return this._size === 0;
  }

  extractMin() {
    const min = this._heap[0];
    this._swap(0, this._size - 1);
    this._size -= 1;
    this._pos[min] = -1;
    if (this._size > 0) {
      this._siftDown(0);
    }
    return min;
  }

  _siftUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this._keys[this._heap[i]] >= this._keys[this._heap[parent]]) {
        break;
      }
      this._swap(i, parent);
      i = parent;
    }
  }

  _siftDown(i) {
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < this._size && this._keys[this._heap[left]] < this._keys[this._heap[smallest]]) {
        smallest = left;
      }
      if (right < this._size && this._keys[this._heap[right]] < this._keys[this._heap[smallest]]) {
        smallest = right;
      }
      if (smallest === i) {
        break;
      }
      this._swap(i, smallest);
      i = smallest;
    }
  }

  _swap(i, j) {
    const vi = this._heap[i];
    const vj = this._heap[j];
    this._heap[i] = vj;
    this._heap[j] = vi;
    this._pos[vi] = j;
    this._pos[vj] = i;
  }
}

module.exports = { IndexedMinHeap };
