// Sorting — QuickSort

/**
 * QuickSort with optional randomized pivot to avoid O(n²) on sorted input.
 * Time: O(n log n) average, O(n²) worst; Space: O(log n) stack.
 */

/**
 * Sorts arr in ascending order in place.
 * @param {number[]|null} arr
 * @param {boolean} [randomizedPivot=false]
 * Time: O(n log n) average; Space: O(log n).
 */
function sort(arr, randomizedPivot = false) {
  if (arr == null || arr.length < 2) {
    return;
  }
  quickSort(arr, 0, arr.length - 1, randomizedPivot);
}

function quickSort(arr, left, right, randomizedPivot) {
  if (left >= right) {
    return;
  }
  if (randomizedPivot) {
    const r = left + Math.floor(Math.random() * (right - left + 1));
    swap(arr, r, right);
  }
  const p = partition(arr, left, right);
  quickSort(arr, left, p - 1, randomizedPivot);
  quickSort(arr, p + 1, right, randomizedPivot);
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
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

module.exports = { sort };
