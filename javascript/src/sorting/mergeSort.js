// Sorting — Merge Sort

/**
 * Return a stably sorted copy via top-down or bottom-up merge passes.
 * Technique: Top-down mergesort; bottom-up mergesort
 * Invariant: Merged subarrays are sorted; equal elements keep relative order.
 * sort/sortBottomUp: Time O(n log n); Space O(n).
 */

/**
 * Returns a new sorted copy of arr (top-down).
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

/**
 * Returns a new sorted copy using bottom-up iterative merge passes.
 * @param {number[]|null} arr
 * @returns {number[]}
 */
function sortBottomUp(arr) {
  if (arr == null) {
    return [];
  }
  if (arr.length < 2) {
    return arr.slice();
  }
  const copy = arr.slice();
  const n = copy.length;
  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      mergeRange(copy, left, mid, right);
    }
  }
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

function mergeRange(arr, left, mid, right) {
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

module.exports = { sort, sortBottomUp };
