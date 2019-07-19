/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort((a,b) => a-b)
    if (arr.length % 2) {
      var index = Math.floor(arr.length / 2)
      return arr[index]
    }else{
      var index = arr.length / 2
      return (arr[index] + arr[index-1]) / 2
    }
};
