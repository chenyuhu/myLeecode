/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *5
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    const n = Math.log10(num) / Math.log10(4)
    return n%1 === 0
};
