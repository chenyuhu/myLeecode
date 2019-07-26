/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let index = 1; index < nums.length; index++) {
      nums[0] = nums[0] ^ nums[index]
    }
    return nums[0]
};
