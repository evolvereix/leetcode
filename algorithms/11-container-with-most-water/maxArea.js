/**
 * @name 盛最多水的容器
 * @source https://leetcode.com/problems/container-with-most-water/
 * @author algorizen
 * @date 2019-08-04
 * 
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * Example:
 * 
 *  Input: [1,8,6,2,5,4,8,3,7]
 *  Output: 49
 */

/**
 * @param {number[]} height
 * @return {number}
 * 
 */

const maxArea = (height) => {
  let left = 0, right = height.length - 1, max = 0
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[right], height[left]))
    if (height[right] < height[left]) {
      right--
    } else {
      left--
    }
  }
  return max
}