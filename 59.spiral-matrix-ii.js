/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let i = 0,
    j = 0;
  let count = 1;

  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }

  while (count <= n ** 2) {
    while (true) {
      if (j === n || result[i][j] !== undefined) {
        i++;
        j--;
        break;
      }
      result[i][j++] = count++;
    }
    while (true) {
      if (i === n || result[i][j] !== undefined) {
        j--;
        i--;
        break;
      }
      result[i++][j] = count++;
    }
    while (true) {
      if (j === -1 || result[i][j] !== undefined) {
        i--;
        j++;
        break;
      }
      result[i][j--] = count++;
    }
    while (true) {
      if (i == -1 || result[i][j] !== undefined) {
        j++;
        i++;
        break;
      }
      result[i--][j] = count++;
    }
  }

  return result;
};

// @lc code=end
