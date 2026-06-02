const { sort: bubbleSort } = require('../../src/sorting/bubbleSort');
const { sort: selectionSort } = require('../../src/sorting/selectionSort');
const { sort: insertionSort } = require('../../src/sorting/insertionSort');
const { sort: mergeSort, sortBottomUp } = require('../../src/sorting/mergeSort');
const { sort: countingSort } = require('../../src/sorting/countingSort');
const { sort: heapSort } = require('../../src/sorting/heapSort');
const { sort: quickSort, sort3Way } = require('../../src/sorting/quickSort');
const { sort: radixSort } = require('../../src/sorting/radixSort');
const {
  PROPERTY_TRIALS,
  seededRng,
  isSorted,
  isPermutation,
  randomIntArray,
} = require('../_propertyHelpers');

const nonNegative = (a) => a.map((x) => Math.abs(x));

const INPLACE = [
  ['bubble', (a) => bubbleSort(a)],
  ['selection', (a) => selectionSort(a)],
  ['insertion', (a) => insertionSort(a)],
  ['quick', (a) => quickSort(a, false)],
  ['quickRand', (a) => quickSort(a, true)],
  ['quick3Way', (a) => sort3Way(a)],
  ['heap', (a) => heapSort(a)],
  ['counting', (a) => countingSort(a)],
  ['radix', (a) => radixSort(a)],
];

describe('property sorts', () => {
  test('in-place sorts 100 trials', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const original = randomIntArray(rng);
      for (const [name, sorter] of INPLACE) {
        const arr = name === 'counting' || name === 'radix' ? nonNegative([...original]) : [...original];
        const baseline = [...arr];
        sorter(arr);
        expect(isSorted(arr)).toBe(true);
        expect(isPermutation(baseline, arr)).toBe(true);
      }
    }
  });

  test('merge sorts 100 trials', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const original = randomIntArray(rng);
      for (const sorter of [mergeSort, sortBottomUp]) {
        const result = sorter(original);
        expect(isSorted(result)).toBe(true);
        expect(isPermutation(original, result)).toBe(true);
      }
    }
  });
});
