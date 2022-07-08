import { getRandomNumber } from '../helpers.js';

let currentNumber = 0;
const isNumberEven = () => currentNumber % 2 === 0;

const brainEven = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: () => {
    currentNumber = getRandomNumber(1, 10);
    return currentNumber;
  },
  getCorrectAnswer: () => (isNumberEven() ? 'yes' : 'no'),
};

export default brainEven;
