/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // let str = n.toString(2)
  // return str.lastIndexOf('1') === 0
  if (n === 1) {
    return true
  }
  if (n%2 || n === 0) {
    return false
  }
  return isPowerOfTwo(n/2)
};
