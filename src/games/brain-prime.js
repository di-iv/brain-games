import { primeNumbers } from '../consts.js';
import { getRandomNumber } from '../helpers.js';

let currentNumber = 0;

const brainGcd = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion: () => {
    currentNumber = getRandomNumber(1, 100);
    return currentNumber;
  },
  getCorrectAnswer: () => (primeNumbers.includes(currentNumber) ? 'yes' : 'no'),
};

export default brainGcd;
