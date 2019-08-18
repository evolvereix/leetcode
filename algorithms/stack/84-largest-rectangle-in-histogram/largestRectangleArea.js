/**
 * @source https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @author algorizen
 * @date 2019-08-12
 * @complexity 
 * 
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
 * 
 * Example:
 * 
 *  Input: [2, 1, 5, 6, 2, 3]
 *  Output: 10
 */

/**
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = (heights) => {
  let ans = 0
  let stack = []
  const len = heights.length

  for (let i = 0; i <= len; i++) {
    let cur = (i === len) ? -1 : heights[i]
    while (stack.length && cur < heights[stack[stack.length - 1]]) {
      let tmp = heights[stack.pop()]
      let distance = stack.length === 0 ? i : i - stack[stack.length - 1] -1
      ans = Math.max(ans, distance*tmp)
    }
    stack.push(i)
  }
  return ans
}