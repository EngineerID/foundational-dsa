// Linear — Singly Linked List

/** Singly linked list.
 * addFirst/addLast O(1); get/remove at index O(n); reverse O(n).
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  /** Creates an empty list.
   * Time: O(1); Space: O(1).
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  /** Returns the number of elements.
   * Time: O(1); Space: O(1).
   */
  size() {
    return this._size;
  }

  /** Inserts at the front.
   * Time: O(1); Space: O(1).
   */
  addFirst(value) {
    const node = new Node(value);
    node.next = this._head;
    this._head = node;
    if (this._tail === null) {
      this._tail = this._head;
    }
    this._size++;
  }

  /** Inserts at the back.
   * Time: O(1); Space: O(1).
   */
  addLast(value) {
    const node = new Node(value);
    if (this._tail === null) {
      this._head = this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  /** Returns the element at `index`.
   * Time: O(n); Space: O(1).
   */
  get(index) {
    return this._nodeAt(index).value;
  }

  /** Removes and returns the element at `index`.
   * Time: O(n); Space: O(1).
   */
  remove(index) {
    if (index === 0) {
      const val = this._head.value;
      this._head = this._head.next;
      if (this._head === null) {
        this._tail = null;
      }
      this._size--;
      return val;
    }
    const prev = this._nodeAt(index - 1);
    const target = prev.next;
    prev.next = target.next;
    if (target === this._tail) {
      this._tail = prev;
    }
    this._size--;
    return target.value;
  }

  /** Reverses the list in place.
   * Time: O(n); Space: O(1).
   */
  reverse() {
    let prev = null;
    let cur = this._head;
    this._tail = this._head;
    while (cur !== null) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this._head = prev;
  }

  _nodeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError(`Index ${index} out of bounds`);
    }
    let cur = this._head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }
}

module.exports = { SinglyLinkedList };
