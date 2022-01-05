/**
 * @name 整数反转
 * @source https://leetcode.com/problems/reverse-integer/
 * @author algorizen
 * @date 2019-09-25
 * @complexity
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *  Input: 123
 *  Output: 321
 *
 * Example 2:
 *
 *  Input: -123
 *  Output: -321
 *
 * Example 3:
 *
 *  Input: 120
 *  Output: 21
 *
 * Note:
 *
 *  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 *
 */

/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  const clamp = [2 ** 31 * -1, 2 ** 31 - 1]
  const y = Math.abs(x).toString().split('').reverse().join('') * Math.sign(x)
  return y >= clamp[0] && y <= clamp[1] ? y : 0
}
