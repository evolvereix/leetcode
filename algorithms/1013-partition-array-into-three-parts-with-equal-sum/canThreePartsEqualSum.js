/**
 * @name 将数组分成和相等的三个部分
 * @source https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @author algorizen
 * @date 2019-08-04
 *
 * Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.
 *
 * Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])
 *
 * Example 1:
 *
 *  Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
 *  Output: true
 *  Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 * Example 2:
 *
 *  Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
 *  Output: false
 *
 * Example 3:
 *
 *  Input: A = [3,3,6,5,-2,2,5,1,-9,4]
 *  Output: true
 *  Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 * Constraints:
 *
 *  3 <= A.length <= 50000
 *  -10^4 <= A[i] <= 10^4
 *
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */

// 贪心算法
const canThreePartsEqualSum = (A) => {
  let sum = A.reduce((acc, cur) => acc + cur)
  if (sum % 3) return false
  let target = sum / 3
  let n = A.length
  let temp = 0

  let i = 0
  while (i < n) {
    temp += A[i]
    if (temp === target) break
    i++
  }
  if (temp !== target) return false
  let j = i + 1
  // 需要满足最后一个数组非空
  while (j + 1 < n) {
    temp += A[j]
    if (temp === target * 2) return true
    j++
  }
  return false
}

const canThreePartsEqualSum = (A) => {
  let sum = A.reduce((acc, cur) => acc + cur)
  if (sum % 3) return false
  let target = sum / 3

  let temp = 0
  let count = 0
  for (let i = 0; i < A.length; i++) {
    temp += A[i]
    if (temp === target) {
      count++
      temp = 0
    }
    if (count === 3) return true
  }
  return false
}
