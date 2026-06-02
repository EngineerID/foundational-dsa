const {
  HashTableOpenAddressing,
  ProbingStrategy,
} = require('../../src/hashing/openAddressing');

describe('HashTableOpenAddressing', () => {
  test.each([
    ProbingStrategy.LINEAR,
    ProbingStrategy.QUADRATIC,
    ProbingStrategy.DOUBLE_HASHING,
  ])('put get remove with %s', (strategy) => {
    const table = new HashTableOpenAddressing(strategy);
    table.put('a', 1);
    table.put('b', 2);
    expect(table.get('a')).toBe(1);
    expect(table.remove('a')).toBe(true);
    expect(table.get('a')).toBeNull();
  });

  test('update key', () => {
    const table = new HashTableOpenAddressing(ProbingStrategy.LINEAR);
    table.put('x', 10);
    table.put('x', 20);
    expect(table.get('x')).toBe(20);
  });

  test('remove then reinsert after resize', () => {
    const table = new HashTableOpenAddressing(ProbingStrategy.LINEAR);
    for (let i = 0; i < 12; i++) {
      table.put(i, i * 10);
    }
    expect(table.remove(5)).toBe(true);
    table.put(5, 99);
    expect(table.get(5)).toBe(99);
  });
});
