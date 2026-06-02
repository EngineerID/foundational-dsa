const { DoublyLinkedList } = require('../../src/linear/doublyLinkedList');

describe('DoublyLinkedList', () => {
  test('addFirst addLast reverse', () => {
    const list = new DoublyLinkedList();
    list.addLast(1);
    list.addFirst(2);
    expect(list.get(0)).toBe(2);
    list.reverse();
    expect(list.get(0)).toBe(1);
  });

  test('remove tail updates size', () => {
    const list = new DoublyLinkedList();
    list.addLast(1);
    list.addLast(2);
    expect(list.remove(1)).toBe(2);
    expect(list.size()).toBe(1);
    expect(list.get(0)).toBe(1);
  });

  test('negative index throws', () => {
    const list = new DoublyLinkedList();
    list.addFirst(1);
    expect(() => list.get(-1)).toThrow(RangeError);
  });
});
