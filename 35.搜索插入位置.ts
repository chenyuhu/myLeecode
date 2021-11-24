/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let height = nums.length;
  while (low < height) {
    const mid = Math.floor((low + height) / 2);
    if (nums[mid] > target) {
      height = mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (mid === 1) {
      
    } else {
      return mid;
    }
  }
  return 0;
}
// @lc code=end
