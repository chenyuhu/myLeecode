/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  const map = new Map()
  for(let i of s) {
    if(map.has(i)){
      map.set(i,map.get(i) + 1)
    }else {
      map.set(i,1)
    }
  }
  for(let i of t) {
    if(!map.has(i)){
      return false
    }
    const num = map.get(i)
    if(num === 1) {
      map.delete(i)
    }else {
      map.set(i, num-1)
    }
  }
  return map.size === 0
};
// @lc code=end
