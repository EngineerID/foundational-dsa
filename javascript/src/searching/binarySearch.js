// Searching — Binary Search

/**
 * Iterative binary search on sorted arrays, including duplicate boundary variants.
 * Time: O(log n); Space: O(1).
 */

/**
 * Returns any index of key in sorted arr, or -1.
 * Time: O(log n); Space: O(1).
 * @param {number[]|null} arr
 * @param {number} key
 * @returns {number}
 */
function search(arr, key) {
  if (arr == null || arr.length === 0) {
    return -1;
  }
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] < key) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

/**
 * Returns the leftmost index of key in sorted arr, or -1.
 * Time: O(log n); Space: O(1).
 * @param {number[]|null} arr
 * @param {number} key
 * @returns {number}
 */
function firstOccurrence(arr, key) {
  if (arr == null || arr.length === 0) {
    return -1;
  }
  let lo = 0;
  let hi = arr.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === key) {
      result = mid;
      hi = mid - 1;
    } else if (arr[mid] < key) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

/**
 * Returns the rightmost index of key in sorted arr, or -1.
 * Time: O(log n); Space: O(1).
 * @param {number[]|null} arr
 * @param {number} key
 * @returns {number}
 */
function lastOccurrence(arr, key) {
  if (arr == null || arr.length === 0) {
    return -1;
  }
  let lo = 0;
  let hi = arr.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === key) {
      result = mid;
      lo = mid + 1;
    } else if (arr[mid] < key) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

module.exports = { search, firstOccurrence, lastOccurrence };
