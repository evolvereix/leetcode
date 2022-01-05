/**
 * @name 求众数 II
 * @source https://leetcode.com/problems/majority-element-ii/
 * @author algorizen
 * @date 2019-08-04
 *
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 *
 * Note: The algorithm should run in linear time and in O(1) space.
 *
 * Example 1:
 *
 *  Input: [3,2,3]
 *  Output: [3]
 *
 * Example 2:
 *
 *  Input: [1,1,1,3,3,2,2,2]
 *  Output: [1,2]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const majorityElement = (nums) => {
  const len = nums.length
  if (!nums || !len) return []
  if (len < 2) return nums

  let m = new Map()
  let result = []

  for (const i of nums) {
    let count = m.has(i) ? m.get(i) + 1 : 1
    m.set(i, count)
  }

  let judage = len / 3

  m.forEach((value, key) => {
    if (value > judage) result.push(key)
  })
  return result
}

const majorityElement = (nums) => {
  const len = nums.length
  if (!nums || !len) return []
  if (len < 2) return nums

  let temp = {}
  let res = []
  for (const i of nums) {
    temp[i] = temp[i] + 1 || 1
    if (temp[i] > len / 3) res.push(i)
  }
  return [...new Set(res)]
}

// 摩尔投票法 O(n) O(1)
const majorityElement = (nums) => {
  const len = nums.length
  if (!nums || !len) return []
  if (len < 2) return nums

  let result = []
  let candidate1 = nums[0],
    count1 = 0
  let candidate2 = nums[0],
    count2 = 0

  for (const i of nums) {
    if (i === candidate1) {
      count1++
    } else if (i === candidate2) {
      count2++
    } else if (count1 === 0) {
      candidate1 = i
      count1 = 1
    } else if (count2 === 0) {
      candidate2 = i
      count2 = 1
    } else {
      count1--
      count2--
    }
  }

  count1 = 0
  count2 = 0
  for (const i of nums) {
    if (i === candidate1) {
      count1++
    } else if (i === candidate2) {
      count2++
    }
  }

  const judage = len / 3
  count1 > judage && result.push(candidate1)
  count2 > judage && result.push(candidate2)

  return result
}
