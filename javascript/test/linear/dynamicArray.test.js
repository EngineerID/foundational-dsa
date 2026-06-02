const { DynamicArray } = require('../../src/linear/dynamicArray');

describe('DynamicArray', () => {
  test('basic add get set remove', () => {
    const arr = new DynamicArray();
    expect(arr.size()).toBe(0);
    arr.add(1);
    arr.add(2);
    expect(arr.get(0)).toBe(1);
    arr.set(1, 5);
    expect(arr.remove(1)).toBe(5);
    expect(arr.size()).toBe(1);
  });

  test('out of bounds on empty and past end', () => {
    const arr = new DynamicArray();
    expect(() => arr.get(0)).toThrow(RangeError);
    arr.add(1);
    expect(() => arr.get(1)).toThrow(RangeError);
  });

  test('resize and remove middle element', () => {
    const arr = new DynamicArray();
    for (let i = 0; i < 10; i++) {
      arr.add(i);
    }
    expect(arr.size()).toBe(10);
    expect(arr.remove(5)).toBe(5);
    expect(arr.size()).toBe(9);
    expect(arr.get(5)).toBe(6);
  });
});
