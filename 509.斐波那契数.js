/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0) {
      return 0
    }
    if (N <= 2) {
      return 1
    } else {
      return fib(N-1)+fib(N-2)
    }
};
