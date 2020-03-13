/**
 * @source https://leetcode.com/problems/3sum-closest/
 * @author algorizen
 * @date 2019-08-05
 * @complexity 
 * 
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * 
 * 
 * Example:
 * 
 *  Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 *  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 */

const threeSumClosest = (nums, target) => {
  let len = nums.length
  if (len <= 3) return nums.reduce((a, b) => { return a + b })

  nums.sort((a, b) => a - b)

  let closestSum = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < len - 2; i++) {
    if (i && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = len - 1

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]

      if (sum < target) {
        while (start < end && nums[start] === nums[++start]);
      } else if (sum > target) {
        while (start < end && nums[end] === nums[--end]);
      } else {
        return sum
      }

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum
      }
    }
  }
  return closestSum
}