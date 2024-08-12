function add(numbers) {
  if (!numbers) return 0;
  const numberList = numbers.replace(/\n/g, ",").split(",");
  let sum = numberList.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue);
  }, 0);
  return sum;
}

const runAssignment = (input) => {
  console.log(`Running assignment for input`, input);
  console.log(add(input));
};

module.exports = runAssignment;
