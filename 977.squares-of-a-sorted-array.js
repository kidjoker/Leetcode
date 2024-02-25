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
    let left = 0,right = nums.length-1;

    let i = nums.length-1;
    while(left <= right) {
        if(nums[left] + nums[right] > 0) {
            result[i--] = nums[right] * nums[right];
            right--;
        } else {
            result[i--] = nums[left] * nums[left];
            left++;
        }
    }

    return result;
};
// @lc code=end

hoistedFunction();
function hoistedFunction(){ console.log(" Hello world! "); }