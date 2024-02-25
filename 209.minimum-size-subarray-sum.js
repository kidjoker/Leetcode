/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = 10 ** 6;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }

    right++;
  }

  return minLength === 10 ** 6 ? 0 : minLength;
};
// @lc code=end
