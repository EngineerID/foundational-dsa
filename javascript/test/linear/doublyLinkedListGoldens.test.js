const fs = require('fs');
const path = require('path');
const { DoublyLinkedList } = require('../../src/linear/doublyLinkedList');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/doubly-linked-list-goldens.json'),
    'utf8',
  ),
);

describe('doubly linked list shared goldens', () => {
  for (const case_ of goldens) {
    test('list ops', () => {
      const list = new DoublyLinkedList();
      for (const v of case_.addLast) list.addLast(v);
      for (const v of case_.addFirst) list.addFirst(v);
      expect(list.get(case_.getIndex)).toBe(case_.getValue);
      expect(list.remove(case_.removeIndex)).toBe(case_.removeValue);
      expect(list.size()).toBe(case_.sizeAfter);
    });
  }
});
