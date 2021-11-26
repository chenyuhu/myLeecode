/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const reg = /[A-Za-z0-9]/g
  const arrS = s.match(reg)
   if (!s.trim() || !arrS) {
     return true
   }
  const s1 = arrS.map(i => i.toLowerCase()).join('')
  const s2 = arrS.reverse().map(i => i.toLowerCase()).join('')
  return s1 ===s2
}
// @lc code=end
