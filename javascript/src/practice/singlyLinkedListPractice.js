const { SinglyLinkedList } = require('../linear/singlyLinkedList');

class SinglyLinkedListPractice {
  constructor() {
    this.list = new SinglyLinkedList();
  }

  addLast(value) {
    this.list.addLast(value);
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

module.exports = { SinglyLinkedListPractice };
