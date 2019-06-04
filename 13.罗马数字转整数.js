/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    let num = 0
    const array = s.split('').map(item => roman[item])
    array.forEach((item,index) => {
      if (index < array.length -1 && array[index] < array[index+1]) {
        num -= array[index]
      }else{
        num += array[index]
      }
    })
    return num
};
