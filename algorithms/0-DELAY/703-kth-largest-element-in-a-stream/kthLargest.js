/**
 * @source https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * @author algorizen
 * @date 2019-08-
 * @complexity
 *
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.
 *
 * Example:
 *
 *  int k = 3;
 *  int[] arr = [4,5,8,2];
 *  KthLargest kthLargest = new KthLargest(3, arr);
 *  kthLargest.add(3);   // returns 4
 *  kthLargest.add(5);   // returns 5
 *  kthLargest.add(10);  // returns 5
 *  kthLargest.add(9);   // returns 8
 *  kthLargest.add(4);   // returns 8
 *
 * Note:
 *
 *  You may assume that nums' length ≥ k-1 and k ≥ 1.
 */

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {}
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
