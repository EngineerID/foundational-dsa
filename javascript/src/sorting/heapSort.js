// Sorting — Heapsort

/**
 * Sort an array in ascending order in place using a binary max-heap.
 * Technique: Heapsort
 * Invariant: Max-heap on active prefix; largest moved to sorted suffix.
 * sort: Time O(n log n); Space O(1).
 */

function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(arr, n, i);
  }
  for (let end = n - 1; end > 0; end--) {
    swap(arr, 0, end);
    siftDown(arr, end, 0);
  }
}

function siftDown(arr, heapSize, i) {
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    if (left < heapSize && arr[left] > arr[largest]) largest = left;
    if (right < heapSize && arr[right] > arr[largest]) largest = right;
    if (largest === i) break;
    swap(arr, i, largest);
    i = largest;
  }
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

module.exports = { sort };
