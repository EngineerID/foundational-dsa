const { DoublyLinkedList } = require('../linear/doublyLinkedList');

class DoublyLinkedListPractice {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  addLast(value) {
    this.list.addLast(value);
  }

  addFirst(value) {
    this.list.addFirst(value);
  }

  get(index) {
    return this.list.get(index);
  }

  remove(index) {
    return this.list.remove(index);
  }

  size() {
    return this.list.size();
  }
}

module.exports = { DoublyLinkedListPractice };
