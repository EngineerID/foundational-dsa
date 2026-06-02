// Searching — Linear Search

/**
 * Linear search over an array.
 * Time: O(n) per search; Space: O(1).
 */

/**
 * Returns the index of key in arr, or -1 if absent.
 * Time: O(n); Space: O(1).
 * @param {number[]|null} arr
 * @param {number} key
 * @returns {number}
 */
function indexOf(arr, key) {
  if (arr == null) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

module.exports = { indexOf };
