/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // const reverse = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x)
    // return reverse > Math.pow(2,31) -1 || reverse < Math.pow(-2,31) ? 0 : reverse
    let num = 0
  while (x !== 0) {
    const a = x % 10
    x = ~~(x /10)
    num = num*10 + a
    if (num > Math.pow(2,31)-1 || num < Math.pow(-2,31)) {
      return 0
    }
  }
  return num
};
