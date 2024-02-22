/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid = 0;

    while(left <= right) {
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] < target) left = mid + 1;
        else if(nums[mid] > target) right = mid - 1;
        else return mid;
    }

    return -1;
};
// @lc code=end

