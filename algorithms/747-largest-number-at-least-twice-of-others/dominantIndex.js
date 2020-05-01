/**
 * @name 至少是其他数字两倍的最大数
 * @source https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 * @author algorizen
 * @date @2020/05/02
 * @complexity
 *
 * In a given integer array nums, there is always exactly one largest element.
 *
 * Find whether the largest element in the array is at least twice as much as every other
 * number in the array.
 *
 * If it is, return the index of the largest element, otherwise return -1.
 *
 * Example 1:
 *
 *  Input: nums = [3, 6, 1, 0]
 *  Output: 1
 *  Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 *
 * Example 2:
 *
 *  Input: nums = [1, 2, 3, 4]
 *  Output: -1
 *  Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 *
 * Note:
 *
 *  1. nums will have a length in the range [1, 50].
 *  2. Every nums[i] will be an integer in the range [0, 99].
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  const len = nums.length
  if (!len) return -1

  let [max, second, index] = [0, 0, 0]
  for (let i = 0; i < len; i++) {
    if (nums[i] > max) {
      second = max
      max = nums[i]
      index = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return second * 2 <= max ? index : -1
}
