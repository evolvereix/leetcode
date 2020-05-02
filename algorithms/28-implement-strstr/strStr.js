/**
 * @name 实现 strStr()
 * @source https://leetcode.com/problems/implement-strstr/
 * @author algorizen
 * @date @2020/05/03
 * @complexity
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 *
 *  Input: haystack = "hello", needle = "ll"
 *  Output: 2
 *
 * Example 2:
 *
 *  Input: haystack = "aaaaa", needle = "bba"
 *  Output: -1
 *
 * Clarification:
 *
 *  What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 *  For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0
  const needleLength = needle.length
  for (let i = 0, len = haystack.length; i < len; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i
    }
  }
  return -1
}

// indexOf
const strStr = (haystack, needle) => {
  return haystack.indexOf(needle)
}

// search
const strStr = (haystack, needle) => {
  return haystack.search(needle)
}
