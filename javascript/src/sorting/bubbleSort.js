// Sorting — Bubble Sort

/**
 * Bubble sort with early-exit when no swaps occur.
 * Time: O(n²) worst/average, O(n) best; Space: O(1).
 */

/**
 * Sorts arr in ascending order in place.
 * Time: O(n²) worst; Space: O(1).
 * @param {number[]|null} arr
 */
function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

module.exports = { sort };
