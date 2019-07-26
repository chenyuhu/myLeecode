/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let num = Math.log10(n)/Math.log10(3)
    return num % 1 === 0
};
