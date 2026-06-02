const { search } = require('../../src/strings/kmp');

describe('kmp', () => {
  test('found', () => {
    expect(search('ababcababa', 'aba')).toBe(0);
  });

  test('not found', () => {
    expect(search('hello', 'world')).toBe(-1);
  });

  test('empty pattern', () => {
    expect(search('abc', '')).toBe(0);
  });

  test('null', () => {
    expect(search(null, 'a')).toBe(-1);
  });
});
