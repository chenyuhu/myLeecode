/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.min = []
  this.arr = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.min.length) {
    const last = this.min[this.min.length -1]
    this.min.push(Math.min(val,last))
  }else {
    this.min.push(val)
  }
  this.arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
  this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
