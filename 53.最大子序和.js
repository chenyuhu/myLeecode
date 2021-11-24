/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  //  贪心算法
    /* let sum = 0
    let num = nums[0]
    for (const i of nums) {
      if (sum > 0) {
        sum += i
      }else {
        sum = i
      }
      num = Math.max(sum,num)
    }
    return num */
    // 动态规划
    const len = nums.length
    const arr = new Array(len).fill(0)
    let max = nums[0]
    arr[0] = nums[0]
    for (let index = 1; index < len; index++) {
        arr[index] = Math.max(arr[index-1] + nums[index],nums[index])
        max = Math.max(arr[index],max)
    }
    return max
};
// @lc code=end
