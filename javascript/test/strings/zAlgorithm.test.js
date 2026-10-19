const { search, zArray } = require('../../src/strings/zAlgorithm');

describe('ZAlgorithm', () => {
  test('z array', () => {
    expect(zArray('aabcaab')[0]).toBe(7);
  });

  test('search and empty pattern', () => {
    expect(search('ababcababa', 'aba')).toBe(0);
    expect(search('abc', '')).toBe(0);
  });
});
