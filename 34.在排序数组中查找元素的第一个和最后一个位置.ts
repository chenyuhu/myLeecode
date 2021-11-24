/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let [left, right] = [0, nums.length - 1];
  const arr = [];
  while (left <= right && (arr[0] === undefined || arr[1] === undefined)) {
    if (nums[left] !== target && arr[0] === undefined) {
      left += 1;
    } else {
      arr[0] = left;
    }
    if (nums[right] !== target && arr[1] === undefined) {
      right -= 1;
    } else {
      arr[1] = right;
    }
  }
  return arr.length !== 2 ? [-1, -1] : arr;
}
searchRange([5, 7, 7, 8, 8, 10], 8);
// @lc code=end
