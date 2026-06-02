// Sorting — Insertion Sort

/**
 * Sort an array in ascending order in place (efficient on nearly sorted input).
 * Technique: Insertion sort
 * Invariant: Prefix [0..i) is sorted.
 * sort: Time O(n²) worst, O(n) best; Space O(1).
 */

/**
 * Sorts arr in ascending order in place.
 * Time: O(n²) worst; O(n) best when nearly sorted; Space: O(1).
 * @param {number[]|null} arr
 */
function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

module.exports = { sort };
