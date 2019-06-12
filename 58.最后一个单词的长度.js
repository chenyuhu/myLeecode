/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.replace(/\s+/g,' ').split(' ')
  return arr.length >= 2 ? arr[arr.length - 1] ? arr[arr.length - 1].length : arr[arr.length - 2].length : arr[arr.length - 1].length
};
