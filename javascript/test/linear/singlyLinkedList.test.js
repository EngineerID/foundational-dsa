const { SinglyLinkedList } = require('../../src/linear/singlyLinkedList');

describe('SinglyLinkedList', () => {
  test('addFirst addLast reverse remove', () => {
    const list = new SinglyLinkedList();
    list.addLast('a');
    list.addFirst('b');
    expect(list.get(0)).toBe('b');
    list.reverse();
    expect(list.get(0)).toBe('a');
    expect(list.remove(1)).toBe('b');
    expect(list.size()).toBe(1);
  });

  test('get on empty list throws', () => {
    const list = new SinglyLinkedList();
    expect(() => list.get(0)).toThrow(RangeError);
  });

  test('remove sole element clears list', () => {
    const list = new SinglyLinkedList();
    list.addLast(42);
    expect(list.remove(0)).toBe(42);
    expect(list.size()).toBe(0);
  });
});
