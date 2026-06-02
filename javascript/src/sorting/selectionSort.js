// Sorting — Selection Sort

/**
 * Selection sort. Time: O(n²); Space: O(1).
 */

/**
 * Sorts arr in ascending order in place.
 * Time: O(n²); Space: O(1).
 * @param {number[]|null} arr
 */
function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      const t = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = t;
    }
  }
}

module.exports = { sort };
