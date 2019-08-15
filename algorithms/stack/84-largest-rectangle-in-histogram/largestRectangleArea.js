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
  let len = heights.length

  for (let i = 0; i < len.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let tmp = height[stack.pop()]
      let distance = i - 1 - stack[stack.length - 1]
      ans = Math.max(max, distance * tmp)
    }
    stack.push(i)
  }

  return ans
}

let input = [2, 1, 5, 6, 2, 3]
console.log('largestRectangleAreaq', largestRectangleArea(input))