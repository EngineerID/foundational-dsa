// Practice — Trie insert / search / prefix

const { Trie } = require('../trees/trie');

class TriePractice {
  constructor() {
    this.trie = new Trie();
  }

  insert(word) {
    this.trie.insert(word);
  }

  search(word) {
    return this.trie.search(word);
  }

  startsWith(prefix) {
    return this.trie.startsWith(prefix);
  }
}

module.exports = { TriePractice };
