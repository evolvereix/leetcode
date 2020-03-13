/**
 * @source https://leetcode.com/problems/4sum/
 * @author algorizen
 * @date 2019-08-05
 * 
 * Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 *  The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 *  Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 *  A solution set is:
 *  [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 */

const fourSum = (nums, target) => {
  let len = nums.length
  if (len < 4) return []
  
  nums.sort((a, b) => a - b)
  let ans = []

  for (let i = 0; i < len - 3; i++) {
    if (i && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < len - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue

      let start = j + 1
      let end = len - 1

      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]

        if (sum > target) {
          end--
        } else if (sum < target) {
          start++
        } else {
          ans.push([nums[i], nums[j], nums[start], nums[end]])

          while (nums[start] === nums[++start]);

          while (nums[end] === nums[--end]);
        }
      }
    }
  }

  return ans
}