const { Queue } = require('../../src/linear/queue');

describe('Queue', () => {
  test('FIFO enqueue peek dequeue', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBe(true);
    q.enqueue('x');
    q.enqueue('y');
    expect(q.peek()).toBe('x');
    expect(q.dequeue()).toBe('x');
    expect(q.dequeue()).toBe('y');
    expect(q.isEmpty()).toBe(true);
  });

  test('dequeue on empty throws', () => {
    const q = new Queue();
    expect(() => q.dequeue()).toThrow('Queue is empty');
  });

  test('peek after partial dequeue', () => {
    const q = new Queue();
    for (let i = 0; i < 5; i++) {
      q.enqueue(i);
    }
    expect(q.dequeue()).toBe(0);
    expect(q.peek()).toBe(1);
  });
});
