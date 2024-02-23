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
var removeElement = function(nums, val) {
    let slow = 0, fast = 0;

    for(;fast < nums.length; fast++) {
        if(nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }
    }

    return slow;
};
// @lc code=end

removeElement([3,2,2,3], 3);