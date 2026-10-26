const { sort } = require('../sorting/insertionSort');

function insertionSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { insertionSort };
