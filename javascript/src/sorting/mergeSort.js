// Sorting — Merge Sort

/**
 * Stable merge sort (divide and conquer).
 * Time: O(n log n); Space: O(n) auxiliary.
 */

/**
 * Returns a new sorted copy of arr in ascending order.
 * Time: O(n log n); Space: O(n).
 * @param {number[]|null} arr
 * @returns {number[]}
 */
function sort(arr) {
  if (arr == null) {
    return [];
  }
  if (arr.length < 2) {
    return arr.slice();
  }
  const copy = arr.slice();
  sortInPlace(copy, 0, copy.length - 1);
  return copy;
}

function sortInPlace(arr, left, right) {
  if (left >= right) {
    return;
  }
  const mid = left + Math.floor((right - left) / 2);
  sortInPlace(arr, left, mid);
  sortInPlace(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  const temp = [];
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }
  while (i <= mid) {
    temp.push(arr[i++]);
  }
  while (j <= right) {
    temp.push(arr[j++]);
  }
  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
  }
}

module.exports = { sort };
