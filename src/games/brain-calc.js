import { getRandomNumber, getRandomOperator } from '../helpers.js';

let currentFirstNumber = 0;
let currentSecondNumber = 0;
let currentOperator = {};

const brainCalc = {
  rules: 'What is the result of the expression?',
  getQuestion: () => {
    currentFirstNumber = getRandomNumber(1, 10);
    currentSecondNumber = getRandomNumber(1, 10);
    currentOperator = getRandomOperator();
    return `${currentFirstNumber} ${currentOperator.operator} ${currentSecondNumber}`;
  },
  getCorrectAnswer: () => String(currentOperator.formula(currentFirstNumber, currentSecondNumber)),
};

export default brainCalc;
