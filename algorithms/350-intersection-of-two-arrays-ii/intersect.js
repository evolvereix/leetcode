/**
 * @name 两个数组的交集 II
 * @source https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @author algorizen
 * @date @2020/04/29
 * @complexity
 *
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *
 *  Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *  Output: [2,2]
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
 * Follow up:
 *
 *  What if the given array is already sorted? How would you optimize your algorithm?
 *  What if nums1's size is small compared to nums2's size? Which algorithm is better?
 *  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = (nums1, nums2) => {
  let result = []
  let m = new Map()

  for (const i of nums1) {
    const n = m.has(i) ? m.get(i) + 1 : 1
    m.set(i, n)
  }

  for (const i of nums2) {
    if (m.has(i)) {
      result.push(i)
      let n = m.get(i)
      if (n > 1) {
        m.set(i, n - 1)
      } else {
        m.delete(i)
      }
    }
  }

  return result
}

const intersect = (nums1, nums2) => {
  let result = []
  let [p1, p2] = [0, 0]

  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1])
      p1++
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else {
      p2++
    }
  }

  return result
}
