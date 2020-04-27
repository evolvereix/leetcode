/**
 * @name 只出现一次的数字
 * @source https://leetcode.com/problems/single-number/
 * @author algorizen
 * @date 2019-09-18
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * 
 *  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 * 
 *  Input: [2,2,1]
 *  Output: 1
 * 
 * Example 2:
 * 
 *  Input: [4,1,2,1,2]
 *  Output: 4
 * 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  return nums.reduce((a, b) => a ^ b, 0)
}