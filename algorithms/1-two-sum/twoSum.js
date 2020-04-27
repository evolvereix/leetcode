/**
 * @name 两数之和
 * @source https://leetcode.com/problems/two-sum/
 * @author algorizen
 * @date 2019-08-04
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * 
 *  Given nums = [2, 7, 11, 15], target = 9,
 * 
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */

const twoSum = (nums, target) => {
  const m = new Map()
  for (const [i, v] of nums.entries()) {
    const k = target - v
    if (m.has(k)) return [m.get(k), i]
    m.set(v, i)
  }
}