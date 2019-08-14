/**
 * @source https://leetcode.com/problems/trapping-rain-water/
 * @author algorizen
 * @date 2019-08-10
 * @complexity 
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * The above elevation map is represented by array [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
 * 
 * 
 * Example:
 * 
 *  Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 *  Output: 6
 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */

// use stack
const trap = (height) => {
  let ans = 0
  let stack = []
  let len = height.length

  for (let i = 0; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let tmp = height[stack.pop()]
      if (!stack.length) continue
      let distance = i - stack[stack.length - 1] - 1
      let bounded = Math.min(height[stack[stack.length - 1]], height[i])
      ans += distance * (bounded - tmp)
    }
    stack.push(i)
  }
  return ans
}

// use two pointer
const trap = (height) => {
  let ans = 0
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0

  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    ans += (height[left] < height[right]) ? (leftMax - height[left++]) : (rightMax - height[right--])
  }

  return ans
}