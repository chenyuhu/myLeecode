/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (39.59%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    36.5K
 * Total Submissions: 92.1K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 * 案例:
 *
 *
 * s = "leetcode"
 * 返回 0.
 *
 * s = "loveleetcode",
 * 返回 2.
 *
 *
 *
 *
 * 注意事项：您可以假定该字符串只包含小写字母。
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arrs = s.split('')
    for (let index = 0; index < arrs.length; index++) {
      const element = arrs.filter(item => item === arrs[index])
      if (element.length === 1) {
        return index
      }
    }
    return -1
};
