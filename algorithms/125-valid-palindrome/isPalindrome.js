/**
 * @name 验证回文串
 * @source https://leetcode.com/problems/valid-palindrome/
 * @author algorizen
 * @date 2019-08-20
 * @complexity
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * Note:
 *
 *  For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Example:
 *
 *  Input: "A man, a plan, a canal: Panama"
 *  Output: true
 *
 * Example:
 *
 *  Input: "race a car"
 *  Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// use regexp
const isPalindrome = (s) => {
  // \w === ^A-Za-z0-9_
  let str = s.replace(/\W/g, '').toLowerCase()
  let res = str.split('').reverse().join('')

  return str === res
}
