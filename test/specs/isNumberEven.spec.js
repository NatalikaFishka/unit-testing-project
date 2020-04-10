const NumbersValidator = require('../../app/numbers_validator');
const { expect } = require('chai');

describe(`isNumberEven positive scenarious`, () => {
  let validator;
  const EVEN_NUMBER = 4;
  const ODD_NUMBER = 15;
  const NOT_A_NUMBER = 'a';
  const NOT_AN_ARRAY = 1;
  const NOT_A_NUMBER_ARRAY = [1, 'n', 16];
  const SAMPLE_ARRAY = [10, 33, 19, 20];
  const EVEN_ARRAY_FROM_SAMLE = [10, 20];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => validator = null);

  it(`should return true if number is even`, () => {
    expect(validator.isNumberEven(EVEN_NUMBER)).to.be.equal(true);
  });

  it(`should return false if number is odd`, () => {
    expect(validator.isNumberEven(ODD_NUMBER)).to.be.equal(false);
  });

  it(`should throw error if not a number`, () => {
    expect(() => validator.isNumberEven(NOT_A_NUMBER)).to.be.
      throw(`[${NOT_A_NUMBER}] is not a type of "Number" it is type of string`);
  });

  it(`should return an array of even numbers`, () => {
    expect(validator.getEvenNumbersFromArray(SAMPLE_ARRAY)).to.be.
      eql(EVEN_ARRAY_FROM_SAMLE);
  });

  it(`should throw error if not an array`, () => {
    expect(() => validator.getEvenNumbersFromArray(NOT_AN_ARRAY)).to.be.
      throw(`${NOT_AN_ARRAY} is not an array of "Numbers"`);
  });

  it(`should throw error if not an array of numbers`, () => {
    expect(() => validator.getEvenNumbersFromArray(NOT_A_NUMBER_ARRAY)).to.be.
      throw(`${NOT_A_NUMBER_ARRAY} is not an array of "Numbers"`);
  });
});
