/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) {
    return false
  }
  const arr = []
  for (const i of s) {
    if (i === "(") {
      arr.push(')')
    }
    if (i === "{") {
      arr.push('}')
    }
    if (i === "[") {
      arr.push(']')
    }
    if (i === ')' ||i === "]" || i === "}") {
      if (!arr.length || i !== arr.pop()) {
        return false
      }
    }
  }
  return !arr.length
};
// @lc code=end
