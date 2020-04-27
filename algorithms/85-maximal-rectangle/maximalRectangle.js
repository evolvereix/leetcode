/**
 * @name 最大矩形
 * @source https://leetcode.com/problems/maximal-rectangle/
 * @author algorizen
 * @date 2019-08-13
 * @complexity 
 * 
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 * 
 * Example:
 * 
 *  Input:
 *  [
 *   ["1","0","1","0","0"],
 *   ["1","0","1","1","1"],
 *   ["1","1","1","1","1"],
 *   ["1","0","0","1","0"]
 *  ]
 * 
 *  Output: 6
 * 
 */

// The problem can be convert to the problem - "Largest Rectangle in Histogram"

 /**
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = (heights) => {
  // only one input case
  heights.push(0)
  let ans = 0
  let stack = []
  const len = heights.length

  for (let i = 0; i <= len; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let tmp = heights[stack.pop()]
      let distance = stack.length === 0 ? i : i - stack[stack.length - 1] -1
      ans = Math.max(ans, distance*tmp)
    }
    stack.push(i)
  }
  return ans
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = (matrix) => {
  if (!matrix.length) return 0
  const m = matrix.length
  const n = matrix[0].length
  let ans = 0

  let h = new Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        h[j]++
      } else {
        h[j] = 0
      }
    }
    console.log('h', h)
    ans = Math.max(ans, largestRectangleArea(h))
  }

  return ans
}