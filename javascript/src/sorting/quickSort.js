// Sorting — QuickSort

/**
 * Sort in place via Lomuto partition, optional random pivot, or 3-way partition.
 * Technique: Lomuto partition; randomized pivot; 3-way Dutch national flag
 * Invariant: 3-way: arr[lo..lt-1] < v, arr[lt..gt] == v, arr[gt+1..hi] > v.
 * sort/sort3Way: Time O(n log n) average; Space O(log n).
 */

/**
 * Sorts arr in ascending order in place.
 * @param {number[]|null} arr
 * @param {boolean} [randomizedPivot=false]
 */
function sort(arr, randomizedPivot = false) {
  if (arr == null || arr.length < 2) {
    return;
  }
  quickSort(arr, 0, arr.length - 1, randomizedPivot);
}

/**
 * Sorts arr in place using 3-way partition (duplicate-heavy inputs).
 * @param {number[]|null} arr
 */
function sort3Way(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  sort3WayRange(arr, 0, arr.length - 1);
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

function sort3WayRange(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const v = arr[lo];
  let lt = lo;
  let gt = hi;
  let i = lo + 1;
  while (i <= gt) {
    if (arr[i] < v) {
      swap(arr, lt++, i++);
    } else if (arr[i] > v) {
      swap(arr, i, gt--);
    } else {
      i++;
    }
  }
  sort3WayRange(arr, lo, lt - 1);
  sort3WayRange(arr, gt + 1, hi);
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

module.exports = { sort, sort3Way };
