// Practice — Kth largest element

const { kthSmallest } = require('../searching/quickSelect');

/** @param {number[]} nums @param {number} k */
function kthLargest(nums, k) {
  return kthSmallest(nums, nums.length - k + 1);
}

module.exports = { kthLargest };
