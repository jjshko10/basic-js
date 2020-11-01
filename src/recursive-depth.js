const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let count = 1;
    let depth = 0;
    for (const el of arr) {
      const elementDepth = this.calculateDepth(el);
      if (elementDepth > depth) {
        depth = elementDepth;
      }
    }
    count += depth;
    return count;
  }
};