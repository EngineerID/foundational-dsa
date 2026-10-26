const { sort } = require('../sorting/bubbleSort');

function bubbleSort(input) {
  const arr = input.slice();
  sort(arr);
  return arr;
}

module.exports = { bubbleSort };
