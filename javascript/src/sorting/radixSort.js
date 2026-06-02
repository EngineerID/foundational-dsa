// Sorting — Radix Sort

/**
 * LSD radix sort for non-negative integers using counting sort per digit.
 * Technique: LSD radix sort
 * Invariant: After digit d, sorted by lower d digits.
 * sort: Time O(d * n); Space O(n).
 */

const { sortByDigit } = require('./countingSort');

function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  if (arr.some((v) => v < 0)) {
    throw new Error('Radix sort requires non-negative keys');
  }
  let max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    sortByDigit(arr, exp);
  }
}

module.exports = { sort };
