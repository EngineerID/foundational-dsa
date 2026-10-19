const { search } = require('../../src/strings/ahoCorasick');

describe('Aho-Corasick', () => {
  test('multi-pattern search', () => {
    expect(search('ushers', ['he', 'she', 'his', 'hers'])).toEqual([1, 2]);
  });
});
