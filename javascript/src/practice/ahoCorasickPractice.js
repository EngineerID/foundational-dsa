const { search } = require('../strings/ahoCorasick');

function findHits(text, patterns) {
  return search(text, patterns);
}

module.exports = { findHits };
