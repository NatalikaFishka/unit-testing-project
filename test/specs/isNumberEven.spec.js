/* eslint-disable linebreak-style */
const NumbersValidator = require('../../app/numbers_validator');
const { expect } = require('chai');

describe(`isNumberEven positive scenarious`, () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => validator = null);

  it(`should return true if number is even`, () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it(`should return false if number is odd`, () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it(`chai test`, () => {
    expect({ a: 'apple', b: 54 }).to.be.eql({ a: 'apple', b: 54 });
  });
});
