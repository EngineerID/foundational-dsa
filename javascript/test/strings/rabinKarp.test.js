const { search } = require('../../src/strings/rabinKarp');

describe('RabinKarp', () => {
  test('search', () => {
    expect(search('abracadabra', 'abra')).toBe(0);
    expect(search('abc', '')).toBe(0);
  });
});
