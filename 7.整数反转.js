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
    const reverse = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x)
    return reverse > Math.pow(2,31) -1 || reverse < Math.pow(-2,31) ? 0 : reverse
};
