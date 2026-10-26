const { search } = require('../strings/rabinKarp');

function firstIndex(text, pattern) {
  return search(text, pattern);
}

module.exports = { firstIndex };
