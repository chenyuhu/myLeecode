/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // if (n < 4) {
  //   return n
  // }
  // let l1 = 2
  // let l2 = 3
  // let l3 = 0
  // let i = 4
  // while(i <= n){
  //   i++
  //   const a = l2
  //   l3 = l2 + l1
  //   l2 = l3
  //   l1 = a
  // }
  // return l3

  // 递归解法
  if (n < 4) {
    return n
  }
  return climbStairs(n-1) + climbStairs(n-2)
};
// @lc code=end
