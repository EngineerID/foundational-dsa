const { Deque } = require('../../src/linear/deque');

describe('Deque', () => {
  test('add and remove both ends', () => {
    const d = new Deque();
    d.addFirst(1);
    d.addLast(2);
    expect(d.removeFirst()).toBe(1);
    expect(d.removeLast()).toBe(2);
    expect(d.isEmpty()).toBe(true);
  });

  test('removeLast on empty throws', () => {
    const d = new Deque();
    expect(() => d.removeLast()).toThrow('Deque is empty');
  });

  test('alternating inserts and removals', () => {
    const d = new Deque();
    d.addFirst(0);
    d.addLast(1);
    d.addFirst(-1);
    expect(d.removeFirst()).toBe(-1);
    expect(d.removeLast()).toBe(1);
    expect(d.removeFirst()).toBe(0);
    expect(d.isEmpty()).toBe(true);
  });
});
