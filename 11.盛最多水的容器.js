/*
 * @Author: 魑魅魍魉鬼魃魈
 * @Description: 描述
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [left,right] =[0,height.length-1]
    let total = 0
   while (left<right) {
     if (height[left] < height[right]) {
       total = Math.max(total,height[left] * (right-left))
       left +=1
     }else {
      total = Math.max(total,height[right] *(right-left))
      right -=1
     }
   }
   return total
};
// @lc code=end
