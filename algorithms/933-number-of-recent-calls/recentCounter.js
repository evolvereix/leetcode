/**
 * @name 最近的请求次数
 * @source https://leetcode.com/problems/number-of-recent-calls/
 * @author algorizen
 * @date 2019-08-14
 * @complexity
 *
 * Write a class RecentCounter to count recent requests.
 *
 * It has only one method: ping(int t), where t represents some time in milliseconds.
 *
 * Return the number of pings that have been made from 3000 milliseconds ago until now.
 *
 * Any ping with time in [t - 3000, t] will count, including the current ping.
 *
 * It is guaranteed that every call to ping uses a strictly larger value of t than before.
 *
 *
 * Example:
 *
 *  Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
 *
 *  Output: [null,1,2,3,3]
 *
 * Note:
 *
 *  1. Each test case will have at most 10000 calls to ping.
 *  2. Each test case will call ping with strictly increasing values of t.
 *  3. Each call to ping will have 1 <= t <= 10^9.
 *
 */

/**
 * @param {number} t
 * @return {number}
 */

class RecentCounter {
  constructor() {
    this.queue = []
  }

  ping(t) {
    this.queue.push(t)
    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
      this.queue.shift()
    }
    return this.queue.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
