const { nextGreaterElement } = require('../../src/linear/monotonicStack');

describe('monotonic stack', () => {
  test('next greater element', () => {
    expect(nextGreaterElement([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1]);
    expect(nextGreaterElement([5])).toEqual([-1]);
    expect(() => nextGreaterElement([])).toThrow();
  });
});
