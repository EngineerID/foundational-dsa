const { Stack } = require('../../src/linear/stack');

describe('Stack', () => {
  test('LIFO push peek pop', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test('peek on empty throws', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('Stack is empty');
  });

  test('pop after draining throws', () => {
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(() => stack.pop()).toThrow('Stack is empty');
  });
});
