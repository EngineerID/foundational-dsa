const { seededRng } = require('../_propertyHelpers');

const PRACTICE_PROPERTY_TRIALS = 25;

function randomIntArray(rng, maxLen = 20) {
  const n = Math.floor(rng() * (maxLen + 1));
  return Array.from({ length: n }, () => Math.floor(rng() * 21) - 10);
}

function randomSortedArray(rng, maxLen = 20) {
  const arr = randomIntArray(rng, maxLen);
  arr.sort((a, b) => a - b);
  return arr;
}

function randomNonNegative(rng, maxLen = 15) {
  const n = Math.floor(rng() * (maxLen + 1));
  return Array.from({ length: n }, () => Math.floor(rng() * 12));
}

module.exports = {
  PRACTICE_PROPERTY_TRIALS,
  seededRng,
  randomIntArray,
  randomSortedArray,
  randomNonNegative,
};
