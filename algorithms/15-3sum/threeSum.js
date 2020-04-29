/**
 * @name 三数之和
 * @source https://leetcode.com/problems/3sum/
 * @author algorizen
 * @date 2019-08-04
 * @complexity O(n^2)
 * 
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note:
 * 
 *  The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 *  Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 *  A solution set is:
 *  [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 *  ]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 */

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i && nums[i] === nums[i - 1]) continue
    
    let target = -nums[i]
    let [start, end] = [i + 1, len - 1]

    while (start < end) {
      let sum = nums[start] + nums[end]

      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        ans.push([nums[i], nums[start], nums[end]])

        while (nums[start] === nums[++start]);

        while (nums[end] === nums[--end]);
      }
    }
  }

  return ans
}