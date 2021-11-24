/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let los = 0;
  let fs = 1;

  while (fs <= nums.length - 1) {
    if (nums[fs] === nums[los]) {
      nums.splice(fs, 1);
    } else {
      los += 1;
      fs += 1;
    }
  }
  return nums.length;
}
// @lc code=end
