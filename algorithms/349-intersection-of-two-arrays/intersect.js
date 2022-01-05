/**
 * @name 两个数组的交集
 * @source https://leetcode.com/problems/intersection-of-two-arrays/
 * @author algorizen
 * @date @2020/04/29
 * @complexity
 *
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *
 *  Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *  Output: [2]
 *
 * Example 2:
 *
 *  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  Output: [4,9]
 *
 * Note:
 *
 *  Each element in the result must be unique.
 *  The result can be in any order.
 *
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))]
}
