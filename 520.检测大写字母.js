/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const head = /(^[A-Z]*$)|(^[A-Z]?[a-z]*$)/
    return head.test(word)
};
