const operators = [
  { operator: '+', formula: (a, b) => a + b },
  { operator: '-', formula: (a, b) => a - b },
  { operator: '*', formula: (a, b) => a * b },
];

const allRoundsCount = 3;

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23,
  29, 31, 37, 41, 43, 47, 53, 59,
  61, 67, 71, 73, 79, 83, 89, 97,
];

export { operators, allRoundsCount, primeNumbers };
