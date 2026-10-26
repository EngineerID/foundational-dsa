const { build } = require('../strings/suffixArray');

function suffixArray(s) {
  return build(s);
}

module.exports = { suffixArray };
