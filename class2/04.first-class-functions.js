function sum(a, b) {
  return a + b;
}

const myFunc = sum;

console.log(sum(2, 5));
console.log(myFunc(2, 5));

function applyFnAndNumberToArray(fn, listOfNumbers, numberToApply) {
  const newList = [];

  listOfNumbers.forEach((n) => {
    newList.push(fn(n, numberToApply));
  });

  return newList;
}

console.log(applyFnAndNumberToArray(sum, [0, 1, 2, 3, 4], 10));
console.log(applyFnAndNumberToArray(myFunc, [0, 1, 2, 3, 4], 10));

// eslint-disable-next-line
const sumNumber = (listOfNumbers, numberToSum) => {
  return applyFnAndNumberToArray(sum, listOfNumbers, numberToSum);
};

console.log(sumNumber([0, 1, 2, 3, 4], 10));