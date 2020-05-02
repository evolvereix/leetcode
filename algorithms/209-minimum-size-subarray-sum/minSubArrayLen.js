/**
 * @name 长度最小的子数组
 * @source https://leetcode.com/problems/minimum-size-subarray-sum/
 * @author algorizen
 * @date @2020/05/03
 * @complexity
 *
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 *
 * Example:
 *
 *  Input: s = 7, nums = [2,3,1,2,4,3]
 *  Output: 2
 *  Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 *
 * Follow up:
 *
 *  If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 *
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  if (!nums || !nums.length) return 0

  const INT_MAX = Number.MAX_SAFE_INTEGER
  let [j, sum, t] = [0, 0, INT_MAX]

  for (let i = 0, len = nums.length; i < len; i++) {
    sum += nums[i]

    while (sum >= s) {
      t = Math.min(t, i - j + 1)
      sum -= nums[j++]
    }
  }
  return t === INT_MAX ? 0 : t
}
