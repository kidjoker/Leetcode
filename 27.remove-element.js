/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length-1;

  while(left <= right) {
    while(left <= right && nums[left] !== val) {
        left++;
    }
    while(left <= right && nums[right] === val) {
        right--;
    }
    if(left < right) {
        nums[left++] = nums[right--];
    }
  }

  return left;
};
// @lc code=end

removeElement([3,2,2,3], 3)