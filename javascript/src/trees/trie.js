/** Trees — Trie (prefix tree) */

/**
 * Trie for lowercase string keys.
 * insert/search/startsWith O(L) where L is key length.
 */
class Node {
  constructor() {
    this.end = false;
    this.children = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this._root = new Node();
  }

  /** Inserts a word. Time: O(L); Space: O(L). */
  insert(word) {
    let cur = this._root;
    for (const c of word) {
      const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (cur.children[idx] === null) {
        cur.children[idx] = new Node();
      }
      cur = cur.children[idx];
    }
    cur.end = true;
  }

  /** Returns true if the word exists. Time: O(L); Space: O(1). */
  search(word) {
    const node = this._traverse(word, false);
    return node !== null && node.end;
  }

  /** Returns true if any word has the given prefix. Time: O(L); Space: O(1). */
  startsWith(prefix) {
    return this._traverse(prefix, true) !== null;
  }

  _traverse(s, prefixOnly) {
    let cur = this._root;
    for (const c of s) {
      const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (idx < 0 || idx >= 26) {
        return null;
      }
      if (cur.children[idx] === null) {
        return null;
      }
      cur = cur.children[idx];
    }
    return cur;
  }
}

module.exports = { Trie };
