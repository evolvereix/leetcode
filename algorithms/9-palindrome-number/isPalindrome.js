/**
 * @name 回文数
 * @source https://leetcode.com/problems/palindrome-number/
 * @author algorizen
 * @date 2019-09-25
 * @complexity 
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 *  Input: 123
 *  Output: true
 * 
 * Example 2:
 * 
 *  Input: -123
 *  Output: -false'
 *  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * 
 *  Input: 120
 *  Output: 21
 *  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Note:
 * 
 *  Coud you solve it without converting the integer to a string?
 * 
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false
  const y = `${x}`.split('').reverse().join('')
  return x == y
}