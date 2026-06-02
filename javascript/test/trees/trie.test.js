const { Trie } = require('../../src/trees/trie');

describe('Trie', () => {
  test('search and prefix', () => {
    const trie = new Trie();
    trie.insert('cat');
    expect(trie.search('cat')).toBe(true);
    expect(trie.startsWith('ca')).toBe(true);
    expect(trie.search('ca')).toBe(false);
  });

  test('nonexistent word', () => {
    const trie = new Trie();
    trie.insert('dog');
    expect(trie.search('cat')).toBe(false);
    expect(trie.startsWith('ca')).toBe(false);
  });

  test('invalid characters', () => {
    const trie = new Trie();
    trie.insert('abc');
    expect(trie.search('ABC')).toBe(false);
    expect(trie.startsWith('A')).toBe(false);
  });

  test('prefix not word', () => {
    const trie = new Trie();
    trie.insert('hello');
    trie.insert('help');
    expect(trie.startsWith('hel')).toBe(true);
    expect(trie.search('hel')).toBe(false);
  });
});
