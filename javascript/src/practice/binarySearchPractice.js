// Practice — Binary search in a sorted array

const { search } = require('../searching/binarySearch');

function findIndex(nums, target) {
  return search(nums, target);
}

module.exports = { findIndex };
