/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var num = Number(digits.slice(-1)) + 1
  if (num > 9) {
    console.log(num)
  }else {
    digits[digits.length -1] = num
  }
  return digits
};
