// Linear — Stack (linked-list backed)

/** LIFO stack backed by SinglyLinkedList.
 * push/pop/peek O(1); Space: O(n).
 */

const { SinglyLinkedList } = require('./singlyLinkedList');

class Stack {
  constructor() {
    this._list = new SinglyLinkedList();
  }

  /** Pushes a value onto the stack.
   * Time: O(1); Space: O(1).
   */
  push(value) {
    this._list.addFirst(value);
  }

  /** Pops and returns the top value.
   * Time: O(1); Space: O(1).
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this._list.remove(0);
  }

  /** Returns the top without removing.
   * Time: O(1); Space: O(1).
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this._list.get(0);
  }

  /** Returns true if the stack has no elements.
   * Time: O(1); Space: O(1).
   */
  isEmpty() {
    return this._list.size() === 0;
  }
}

module.exports = { Stack };
