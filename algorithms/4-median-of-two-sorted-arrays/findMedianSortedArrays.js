/**
 * @name 寻找两个有序数组的中位数
 * @source https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @author algorizen
 * @date 2019-08-04
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 *  nums1 = [1, 3]
 *  nums2 = [2]
 * 
 *  The median is 2.0
 * 
 * Example 2:
 * 
 *  nums1 = [1, 2]
 *  nums2 = [3, 4]
 * 
 *  The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 */

const findMedianSortedArrays = (nums1, nums2) => {
  const s = nums1.concat(nums2)
  s.sort((a, b) => a - b)

  const len = s.length
  if (len & 1) {
    return s[~~(len / 2)]
  } else {
    return (s[(len / 2 - 1)] + s[(len / 2)]) / 2
  }
}