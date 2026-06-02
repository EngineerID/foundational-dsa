// Sorting — Counting Sort

/**
 * Stable sort for non-negative integers in bounded range.
 * Technique: Counting sort
 * Invariant: Prefix counts place keys in stable order.
 * sort/sortByDigit: Time O(n + k); Space O(k).
 */

function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  if (arr.some((v) => v < 0)) {
    throw new Error('Counting sort requires non-negative keys');
  }
  const max = Math.max(...arr);
  sortWithRange(arr, max);
}

function sortByDigit(arr, exp) {
  if (arr == null || arr.length < 2) {
    return;
  }
  const n = arr.length;
  const output = new Array(n);
  const count = Array(10).fill(0);
  for (const v of arr) {
    count[Math.floor(v / exp) % 10]++;
  }
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  for (let i = 0; i < n; i++) arr[i] = output[i];
}

function sortWithRange(arr, max) {
  const n = arr.length;
  const output = new Array(n);
  const count = Array(max + 1).fill(0);
  for (const v of arr) count[v]++;
  for (let i = 1; i <= max; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  for (let i = 0; i < n; i++) arr[i] = output[i];
}

module.exports = { sort, sortByDigit };
