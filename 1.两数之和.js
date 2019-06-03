/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index1 = 0
    let index2 = 1
    const array = JSON.parse(JSON.stringify(nums))
    for (let index = 0; index < nums.length; index++) {
      array.shift()
      index1 = index
      for (let n = 0; n < array.length; n++) {
        if (array[n] + nums[index1] === target) {
          index2 = nums.length - array.length + n
          return [index1,index2]
        }
      }
    }
};
