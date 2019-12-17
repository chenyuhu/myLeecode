/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let num = []
    for (let index = 0; index < nums.length; index += 1) {
      if (nums[index] === target) {
        num.push(index)
      }
    }
    if (num.length === 0) {
      num = [-1,-1]
    }else if(num.length === 1){
      num = num.concat(num[0])
    }else{
      num = [num.shift(),num.pop()]
    }
    return num
};
// @lc code=end
