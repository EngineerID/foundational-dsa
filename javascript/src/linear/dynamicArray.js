// Linear — Dynamic Array

/**
 * Resizable array-backed list with amortized append.
 * Technique: Dynamic array doubling
 * Invariant: size <= capacity; length tracks element count.
 * append/get/set: Time O(1) amortized; resize O(n); Space O(n).
 */

const DEFAULT_CAPACITY = 4;

class DynamicArray {
  /** Creates an empty dynamic array.
   * Time: O(1); Space: O(1).
   */
  constructor() {
    this._data = new Array(DEFAULT_CAPACITY);
    this._size = 0;
  }

  /** Returns the number of elements.
   * Time: O(1); Space: O(1).
   */
  size() {
    return this._size;
  }

  /** Appends an element (amortized O(1)).
   * Time: amortized O(1); Space: O(n) when resize.
   */
  add(value) {
    this._ensureCapacity(this._size + 1);
    this._data[this._size++] = value;
  }

  /** Returns the element at `index`.
   * Time: O(1); Space: O(1).
   */
  get(index) {
    this._checkIndex(index);
    return this._data[index];
  }

  /** Sets the element at `index`.
   * Time: O(1); Space: O(1).
   */
  set(index, value) {
    this._checkIndex(index);
    this._data[index] = value;
  }

  /** Removes and returns the element at `index`.
   * Time: O(n); Space: O(1).
   */
  remove(index) {
    this._checkIndex(index);
    const removed = this._data[index];
    for (let i = index; i < this._size - 1; i++) {
      this._data[i] = this._data[i + 1];
    }
    this._data[--this._size] = undefined;
    return removed;
  }

  _ensureCapacity(minCapacity) {
    if (minCapacity <= this._data.length) {
      return;
    }
    const newCap = Math.max(this._data.length * 2, minCapacity);
    const next = new Array(newCap);
    for (let i = 0; i < this._size; i++) {
      next[i] = this._data[i];
    }
    this._data = next;
  }

  _checkIndex(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError(`Index ${index} out of bounds`);
    }
  }
}

module.exports = { DynamicArray };
