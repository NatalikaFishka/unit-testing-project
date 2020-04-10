/**
 *
 * Primitive calculator that can add and multiple numbers
 * @class Calculator
 */
class Calculator {
  /**
   *Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {

  }

  /**
   *
   *
   * @param {Array<Number>} numbersToAdd is an array of passed arguments
   * @return {Number} the sum of the passed arguments
   * @memberof Calculator
   */
  add(...numbersToAdd) {
    if (numbersToAdd.every((item) => typeof item === 'number')) {
      return numbersToAdd.reduce((totalSum, currentNumber) =>
        totalSum + currentNumber);
    } else {
      throw new Error(`Passed arguments ${numbersToAdd} are not all numbers`);
    }
  }

  /**
   *
   *
   * @param {Array<Number>} numbersToMultiply is an array of passed arguments
   * @return {Number} the total product of the passed arguments
   * @memberof Calculator
   */
  multiply(...numbersToMultiply) {
    if (numbersToMultiply.every((item) => typeof item === 'number')) {
      return numbersToMultiply.reduce((totalProduct, currentNumber) =>
        totalProduct * currentNumber);
    } else {
      // eslint-disable-next-line max-len
      throw new Error(`Passed arguments ${numbersToMultiply} are not all numbers`);
    }
  }
}

module.exports = Calculator;
