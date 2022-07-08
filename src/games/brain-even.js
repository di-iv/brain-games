import { getRandomNumber, isNumberEven } from '../helpers.js';

let currentNumber = 0;

const brainEven = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: () => {
    currentNumber = getRandomNumber(1, 10);
    return currentNumber;
  },
  getCorrectAnswer: () => (isNumberEven(currentNumber) ? 'yes' : 'no'),
};

export default brainEven;
