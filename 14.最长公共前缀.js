/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
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
  // 方法一
    // const str = strs.shift()
    // let restr = ''
    // if (str && strs.length) {
    //   for (let index = 0; index < str.length; index++) {
    //     const character = strs.every(item => item.indexOf(str.slice(0,index + 1)) === 0)
    //     const isPreFix = strs.find(item => item.indexOf(str.slice(0,index + 2)) !== 0)
    //     if (character && isPreFix) {
    //       restr = str.slice(0,index + 1)
    //       break
    //     }
    //     if (character) {
    //       restr = str.slice(0,index + 1)
    //     }
    //   }
    // }else if(str && strs.length === 0){
    //   restr = str
    // }
    // return restr
    // 方法二
    // let str = strs[0]
    // for (let i = 0; i < strs.length; i++) {
    //   let num = 0
    //   for (; num < str.length && num < strs[i].length; num++) {
    //     if (str[num] !== strs[i][num]) {
    //       break
    //     }
    //   }
    //   str = str.substring(0,num)
    // }
    // return str
    // 方法三
    if (strs.length === 1) {
      return strs[0]
    }
    let str = getTowStr(strs[0],strs[1])
    for (let i = 2; i < strs.length; i++) {
      str = getTowStr(str,strs[i])
      if (!str) {
        break
      }
    }
    return str
};
const getTowStr = (s1,s2) => {
  const min = Math.min(s1.length,s2.length)
  let i = 0
  for (; i < min; i++) {
    if (s1[i] !== s2[i]) {
      break
    }
  }
  return s1.substring(0,i)
}
