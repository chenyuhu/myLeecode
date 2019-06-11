/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const str = strs.shift()
    let restr = ''
    if (str && strs.length) {
      for (let index = 0; index < str.length; index++) {
        const character = strs.every(item => item.indexOf(str.slice(0,index + 1)) === 0)
        const isPreFix = strs.find(item => item.indexOf(str.slice(0,index + 2)) !== 0)
        if (character && isPreFix) {
          restr = str.slice(0,index + 1)
          break
        }
        if (character) {
          restr = str.slice(0,index + 1)
        }
      }
    }else if(str && strs.length === 0){
      restr = str
    }
    return restr
};
