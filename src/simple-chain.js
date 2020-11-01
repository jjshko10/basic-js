const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
     return this.chain.length;
  },
  addLink(value) {
    const node = `( ${value} )`;
    this.chain = this.chain ? [...this.chain, node] : [node];
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      delete this.chain;
      throw new Error('Invalid position type');
      }
    if (position < 1 || position > this.chain.length) {
      delete this.chain;
      throw new Error('Position arg out of bounds');
    }

    this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
    return this;
  
  },
  reverseChain() {
    if (this.chain) {
      this.chain = [...this.chain].reverse();
    }
    return this;
  },
  finishChain() {
     const result = this.chain.join('~~');
     delete this.chain;
     return result;
  }
};

module.exports = chainMaker;
