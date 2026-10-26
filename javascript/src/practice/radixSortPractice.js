const { sort } = require('../sorting/radixSort');

function radixSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { radixSort };
