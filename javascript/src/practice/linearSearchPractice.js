const { indexOf } = require('../searching/linearSearch');

function findIndex(arr, key) {
  return indexOf(arr, key);
}

module.exports = { findIndex };
