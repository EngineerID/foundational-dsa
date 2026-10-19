const { build } = require('../../src/strings/suffixArray');

describe('suffix array', () => {
  test('build', () => {
    expect(build('banana')).toEqual([5, 3, 1, 0, 4, 2]);
    expect(build('')).toEqual([]);
  });
});
