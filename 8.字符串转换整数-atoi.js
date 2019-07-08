/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str)
    return isNaN(num) ? 0 : num <= Math.pow(2,31) - 1 && num >= -Math.pow(2,31) ? num : num > Math.pow(2,31) - 1 ? Math.pow(2,31) -1 : -Math.pow(2,31)
};
