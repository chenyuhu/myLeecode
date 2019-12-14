/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj  = {}
  for (const num of nums) {
    if (obj.hasOwnProperty(num)) {
      obj[num] += 1
    }else{
      obj[num] = 1
    }
    if (obj[num] > parseInt(nums.length /2)) {
      return num
    }
  }
  return 0
};
