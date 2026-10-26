const { search } = require('../../src/strings/rabinKarp');

describe('RabinKarp', () => {
  test('search', () => {
    expect(search('abracadabra', 'abra')).toBe(0);
    expect(search('abc', '')).toBe(0);
    expect(search('abc', 'z')).toBe(-1);
    expect(search('', 'a')).toBe(-1);
    expect(search('a', 'a')).toBe(0);
    expect(search('aaaa', 'aa')).toBe(0);
    expect(search('abcabcabc', 'abc')).toBe(0);
    expect(search('ab', 'abcd')).toBe(-1);
  });
});
