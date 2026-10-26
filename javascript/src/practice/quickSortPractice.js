const { sort, sort3Way } = require('../sorting/quickSort');

function quickSort(input, threeWay = false) {
  const arr = input.slice();
  if (threeWay) {
    sort3Way(arr);
  } else {
    sort(arr);
  }
  return arr;
}

module.exports = { quickSort };
