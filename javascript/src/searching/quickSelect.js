// Searching — QuickSelect (order statistics)

/**
 * k-th smallest element via partition (QuickSelect).
 * Average time: O(n); worst O(n²); Space: O(1) excluding input copy.
 */

/**
 * Returns the k-th smallest value in arr (1-based: k=1 is minimum).
 * Does not mutate the caller's array.
 * Time: O(n) average; Space: O(n) for the defensive copy.
 * @param {number[]|null} arr
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(arr, k) {
  if (arr == null || arr.length === 0) {
    throw new Error('Array must be non-empty');
  }
  if (k < 1 || k > arr.length) {
    throw new Error('k out of range');
  }
  const copy = arr.slice();
  return select(copy, 0, copy.length - 1, k - 1);
}

function select(arr, left, right, kIndex) {
  if (left === right) {
    return arr[left];
  }
  const pivotIndex = partition(arr, left, right);
  if (kIndex === pivotIndex) {
    return arr[pivotIndex];
  }
  if (kIndex < pivotIndex) {
    return select(arr, left, pivotIndex - 1, kIndex);
  }
  return select(arr, pivotIndex + 1, right, kIndex);
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

module.exports = { kthSmallest };
