/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sums = []
  var sum = 0
  while (!sums.includes(sum)) {
    sums.push(sum)
    sum = 0
    for (const iterator of `${n}`) {
      sum += iterator ** 2
    }
    n = sum
  }
  return sum === 1
};
