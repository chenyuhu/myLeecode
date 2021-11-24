/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let height = nums.length;
  while (low < height) {
    const mid = Math.floor((low + height) / 2);
    if (nums[mid] > target) {
      height = mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
// @lc code=end
