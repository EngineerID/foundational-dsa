const { sort } = require('../sorting/countingSort');

function countingSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { countingSort };
