/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 *
 * https://leetcode-cn.com/problems/integer-replacement/description/
 *
 * algorithms
 * Medium (31.17%)
 * Likes:    31
 * Dislikes: 0
 * Total Accepted:    2.5K
 * Total Submissions: 7.8K
 * Testcase Example:  '8'
 *
 * 给定一个正整数 n，你可以做如下操作：
 *
 * 1. 如果 n 是偶数，则用 n / 2替换 n。
 * 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
 * n 变为 1 所需的最小替换次数是多少？
 *
 * 示例 1:
 *
 *
 * 输入:
 * 8
 *
 * 输出:
 * 3
 *
 * 解释:
 * 8 -> 4 -> 2 -> 1
 *
 *
 * 示例 2:
 *
 *
 * 输入:
 * 7
 *
 * 输出:
 * 4
 *
 * 解释:
 * 7 -> 8 -> 4 -> 2 -> 1
 * 或
 * 7 -> 6 -> 3 -> 2 -> 1
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let index = 0
    let n1 = n
    while (n !== 1 && n1 !== 1) {
      if (n % 2 === 1 || n1 % 2 === 1) {
        n += 1
        n1 -= 1
        index += 1
      }
      n = n / 2
      n1 = n1 / 2
      index += 1
    }

  return index
};
