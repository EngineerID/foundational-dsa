// Practice — KMP first occurrence

const { search } = require('../strings/kmp');

function firstIndex(text, pattern) {
  return search(text, pattern);
}

module.exports = { firstIndex };
