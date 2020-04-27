/**
 * @name 最长公共前缀
 * @source https://leetcode.com/problems/longest-common-prefix/
 * @author algorizen
 * @date 2019-09-25
 * @complexity 
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 *  Input: ["flower","flow","flight"]
 *  Output: "fl"
 * 
 * Example 2:
 * 
 *  Input: ["dog","racecar","car"]
 *  Output: ""
 *  Explanation: There is no common prefix among the input strings.
 * 
 * Note:
 * 
 *  All given inputs are in lowercase letters a-z.
 * 
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (!strs || !strs.length) return ''

  return strs.reduce((acc, cur) => {
    let i = 0
    while (acc[i] && cur[i] && acc[i] === cur[i]) {
      i++
    }
    return acc.slice(0, i)
  })
}