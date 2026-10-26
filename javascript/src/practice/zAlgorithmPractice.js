const { search, zArray } = require('../strings/zAlgorithm');

function findIndex(text, pattern) {
  return search(text, pattern);
}

function zValues(text) {
  return zArray(text);
}

module.exports = { findIndex, zValues };
