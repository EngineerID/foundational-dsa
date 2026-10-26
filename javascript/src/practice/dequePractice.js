const { Deque } = require('../linear/deque');

class DequePractice {
  constructor() {
    this.deque = new Deque();
  }

  addLast(value) {
    this.deque.addLast(value);
  }

  addFirst(value) {
    this.deque.addFirst(value);
  }

  removeFirst() {
    return this.deque.removeFirst();
  }

  removeLast() {
    return this.deque.removeLast();
  }

  isEmpty() {
    return this.deque.isEmpty();
  }
}

module.exports = { DequePractice };
