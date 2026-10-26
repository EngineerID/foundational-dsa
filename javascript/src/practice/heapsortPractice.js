const { sort } = require('../sorting/heapSort');

function heapSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { heapSort };
