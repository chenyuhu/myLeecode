/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length - 1
  if(digits[n] < 9){
    digits[n] += 1
    return digits
  }
  while (n >= 0) {
    digits[n] += 1
    if (digits[n]%10 === 0) {
      digits[n] = 0
      if (n === 0) {
        digits.unshift(1)
      }
      n-=1
    }else {
      return digits
    }
  }
  return digits
};
// @lc code=end
