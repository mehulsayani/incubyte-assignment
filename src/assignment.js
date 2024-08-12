const delimiterConst = "//";
const DEFAULT_DELIMITER_REGEX = /[\n,]/;
const COMMA = ",";

/**
 * This function return the sum of all the non-negative items in the array
 * It throws an error if any of the items is negative
 * @param {Array} numberList
 * @returns {number}
 */
function getSum(numberList = []) {
  const negativeNumbers = [];
  let sum = numberList.reduce((accumulator, currentValue) => {
    let num = Number(currentValue);
    if (num < 0) {
      negativeNumbers.push(num);
      return accumulator;
    }
    return accumulator + num;
  }, 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(COMMA)}`
    );
  }
  return sum;
}

/**
 * This function returns the sum of all the non-negative items in the string
 * It throws an error if any of the items is negative
 * @param {string} numbers
 * @returns {number}
 */
function add(numbers) {
  if (!numbers) return 0;

  if (numbers.startsWith(delimiterConst)) {
    const inputArr = numbers.split("\n");
    const numberString = inputArr[1];
    const newDelimiter = inputArr[0]?.slice(2);
    const numberList = numberString.split(newDelimiter);
    return getSum(numberList);
  }
  const numberList = numbers.split(DEFAULT_DELIMITER_REGEX);
  return getSum(numberList);
}

const runAssignment = (input) => {
  try {
    console.log(`Running assignment for input`, input);
    console.log(add(input));
  } catch (ex) {
    console.error(ex.message);
  }
};

module.exports = runAssignment;
