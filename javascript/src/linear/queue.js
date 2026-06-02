// Linear — Queue (linked-list backed)

/** FIFO queue backed by SinglyLinkedList.
 * enqueue/dequeue/peek O(1); Space: O(n).
 */

const { SinglyLinkedList } = require('./singlyLinkedList');

class Queue {
  constructor() {
    this._list = new SinglyLinkedList();
  }

  /** Enqueues at the back.
   * Time: O(1); Space: O(1).
   */
  enqueue(value) {
    this._list.addLast(value);
  }

  /** Dequeues from the front.
   * Time: O(1); Space: O(1).
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this._list.remove(0);
  }

  /** Peek returns the front without removing.
   * Time: O(1); Space: O(1).
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this._list.get(0);
  }

  /** Returns true if the queue has no elements.
   * Time: O(1); Space: O(1).
   */
  isEmpty() {
    return this._list.size() === 0;
  }
}

module.exports = { Queue };
