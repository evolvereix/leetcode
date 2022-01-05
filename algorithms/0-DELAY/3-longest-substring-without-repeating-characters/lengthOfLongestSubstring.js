/**
 * @source https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @author algorizen
 * @date 2019-08-20
 * @complexity 
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Note:
 * 
 *  The solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * 
 *  Input: "abcabcbb"
 *  Output: 3 
 *  Explanation: The answer is "abc", with the length of 3. 
 * 
 * Example 2:
 * 
 *  Input: "bbbbb"
 *  Output: 1
 *  Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * 
 *  Input: "pwwkew"
 *  Output: 3
 *  Explanation: The answer is "wke", with the length of 3. 
                 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

// TODO
const lengthOfLongestSubstring = (s) => {
  let len = s.length
  if (len < 2) return len
  let l = 0
  let r = 0
  let ans = 0

  for (let i = 0; i < len; i++) {}
}
