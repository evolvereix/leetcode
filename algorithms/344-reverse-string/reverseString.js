/**
 * @name 反转字符串
 * @source https://leetcode.com/problems/reverse-string/
 * @author algorizen
 * @date @2020/05/03
 * @complexity
 *
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 *
 *  Input: ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 *
 * Example 2:
 *
 *  Input: ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 *
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  let [l, r] = [0, s.length - 1]
  while (l < r) {
    ;[s[l++], s[r--]] = [s[r], s[l]]
  }
}
