/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    let left = -1,right = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            left = i;
            right = i+1;
        }
    }

    while(left >= 0 || right < nums.length) {
        if(left === -1) {
            result.push(nums[right] * nums[right]);
            right++;
        }
        else if(right === nums.length) {
            result.push(nums[left] * nums[left]);
            left--;
        }
        else {
            if(Math.abs(nums[left]) < Math.abs(nums[right])) {
                result.push(nums[left] * nums[left]);
                left--;
            }
            else {
                result.push(nums[right] * nums[right]);
                right++;
            }
        }
    }

    return result;
};
// @lc code=end

sortedSquares([1]);