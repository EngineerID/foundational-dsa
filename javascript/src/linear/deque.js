// Linear — Deque (doubly-linked)

/**
 * Double-ended queue with O(1) push/pop at both ends.
 * Technique: Circular buffer deque
 * Invariant: head/tail wrap in fixed or growing buffer.
 * pushFront/pushBack/pop: Time O(1) amortized; Space O(n).
 */

const { DoublyLinkedList } = require('./doublyLinkedList');

class Deque {
  constructor() {
    this._list = new DoublyLinkedList();
  }

  /** Inserts at the front.
   * Time: O(1); Space: O(1).
   */
  addFirst(value) {
    this._list.addFirst(value);
  }

  /** Inserts at the back.
   * Time: O(1); Space: O(1).
   */
  addLast(value) {
    this._list.addLast(value);
  }

  /** Removes and returns the front.
   * Time: O(1); Space: O(1).
   */
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this._list.remove(0);
  }

  /** Removes and returns the back.
   * Time: O(1); Space: O(1).
   */
  removeLast() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this._list.remove(this._list.size() - 1);
  }

  /** Returns true if empty.
   * Time: O(1); Space: O(1).
   */
  isEmpty() {
    return this._list.size() === 0;
  }
}

module.exports = { Deque };
