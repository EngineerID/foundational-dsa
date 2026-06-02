// Linear — Doubly Linked List

/** Doubly linked list with forward and backward traversal.
 * addFirst/addLast O(1); get/remove at index O(n).
 */

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
    if (this._head === null) {
      this._head = this._tail = node;
    } else {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
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
      node.prev = this._tail;
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
    const node = this._nodeAt(index);
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this._head = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this._tail = node.prev;
    }
    this._size--;
    return node.value;
  }

  /** Reverses the list in place.
   * Time: O(n); Space: O(1).
   */
  reverse() {
    let cur = this._head;
    let tmp = null;
    while (cur !== null) {
      tmp = cur.prev;
      cur.prev = cur.next;
      cur.next = tmp;
      cur = cur.prev;
    }
    tmp = this._head;
    this._head = this._tail;
    this._tail = tmp;
  }

  _nodeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError(`Index ${index} out of bounds`);
    }
    if (index < this._size / 2) {
      let cur = this._head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
      return cur;
    }
    let cur = this._tail;
    for (let i = this._size - 1; i > index; i--) {
      cur = cur.prev;
    }
    return cur;
  }
}

module.exports = { DoublyLinkedList };
