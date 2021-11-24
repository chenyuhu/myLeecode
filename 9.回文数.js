/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // const rex = `${x}`.split('').reverse().join('')
    // return x === Number(rex)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    let num = 0
    while (x > num) {
        num = num *10 + x % 10
        x = ~~(x /10)
    }
    return x === num || x === ~~(num /10)
};
