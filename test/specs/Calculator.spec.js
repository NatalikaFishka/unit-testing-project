const Calculator = require('../../app/Calculator');
const { expect } = require('chai');

describe('Calculator correctly adds and multyplies numbers', () => {
  const calculator = new Calculator();

  it('Sum of 3, 6, -9 should be 0', () => {
    expect(calculator.add(3, 6, -9)).to.be.equal(0);
  });

  it('Throw error if arguments to add are not numbers', () => {
    expect(() => calculator.add(3, '6', true)).to.
      throw('Passed arguments 3,6,true are not all numbers');
  });

  it('Product of 3, 6, -9 should be -162', () => {
    expect(calculator.multiply(3, 6, -9)).to.be.equal(-162);
  });

  it('Throw error if arguments to multiply are not numbers', () => {
    expect(() => calculator.multiply(3, '6', true)).to.
      throw('Passed arguments 3,6,true are not all numbers');
  });
});
