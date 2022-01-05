/**
 * @name 多数元素
 * @source https://leetcode.com/problems/majority-element/
 * @author algorizen
 * @date 2019-08-04
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Example 1:
 *
 *  Input: [3,2,3]
 *  Output: 3
 *
 * Example 2:
 *
 *  Input: [2,2,1,1,1,2,2]
 *  Output: 2
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 */

// sort
const majorityElement = (nums) => {
  nums.sort((a, b) => a - b)
  return nums[~~(nums.length / 2)]
}

// without sort
const majorityElement = (nums) => {
  let temp = {}
  for (const i of nums) {
    temp[i] = temp[i] + 1 || 1
    if (temp[i] > nums.length / 2) return i
  }
}
