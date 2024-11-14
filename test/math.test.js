// test/math.test.js
const { expect } = require('chai');
const { add, subtract } = require('../math');

describe('Math Functions', () => {
  describe('add()', () => {
    it('should return 5 for add(2, 3)', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('should return -1 for add(-3, 2)', () => {
      expect(add(-3, 2)).to.equal(-1);
    });
  });

  describe('subtract()', () => {
    it('should return 1 for subtract(3, 2)', () => {
      expect(subtract(3, 2)).to.equal(1);
    });

    it('should fail by returning 5 for subtract(3, 2)', () => {
      expect(subtract(3, 2)).to.equal(5); // This test will fail
    });
  });
});
