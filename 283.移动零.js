/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0
  let l=nums.length
  while (i <= l) {
    if (nums[l] === 0) {
      nums.splice(l,1)
      nums.push(0)
    }
    l--
  }
  return nums
};
// @lc code=end
