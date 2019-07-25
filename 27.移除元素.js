/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var len = 0
  const count = [...nums]
  count.forEach((item,index) => {
    if (item === val) {
      const num = index >= len ? index-len : index
      nums.splice(num, 1)
      len += 1
    }
  })
    return nums.length
};
