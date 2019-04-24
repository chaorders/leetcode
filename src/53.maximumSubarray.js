/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  let max = nums[0];
  let num;

  for (let index = 1; index < nums.length; index++) {
    num = nums[index];
    if (sum < 0) {
      sum = num;
    } else {
      sum += num;
    }

    max = Math.max(max, sum);
  }

  return max;
};

module.exports = maxSubArray;