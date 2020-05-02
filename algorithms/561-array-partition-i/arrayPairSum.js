/**
 * @name 数组拆分 I
 * @source https://leetcode.com/problems/array-partition-i/
 * @author algorizen
 * @date @2020/05/03
 * @complexity
 *
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *
 * Example 1:
 *
 *  Input: [1,4,3,2]
 *  Output: 4
 *  Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 *
 * Note:
 *
 *  1. n is a positive integer, which is in the range of [1, 10000].
 *  2. All the integers in the array will be in the range of [-10000, 10000].
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  return nums.sort((a, b) => a - b).reduce((acc, cur, idx) => (idx % 2 === 0) ? acc += cur : acc)
}
