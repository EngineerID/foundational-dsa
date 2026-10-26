const { sort } = require('../sorting/selectionSort');

function selectionSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { selectionSort };
