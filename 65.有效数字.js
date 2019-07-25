/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const teg = /^\s*$/
  if (teg.test(s)) {
    return false
  }
  return !isNaN(s)
};
