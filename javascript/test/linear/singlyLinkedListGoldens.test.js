const fs = require('fs');
const path = require('path');
const { SinglyLinkedList } = require('../../src/linear/singlyLinkedList');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/singly-linked-list-goldens.json'),
    'utf8',
  ),
);

describe('singly linked list shared goldens', () => {
  for (const case_ of goldens) {
    test('list ops', () => {
      const list = new SinglyLinkedList();
      for (const v of case_.addLast) list.addLast(v);
      expect(list.get(case_.getIndex)).toBe(case_.getValue);
      expect(list.remove(case_.removeIndex)).toBe(case_.removeValue);
      expect(list.size()).toBe(case_.sizeAfter);
    });
  }
});
