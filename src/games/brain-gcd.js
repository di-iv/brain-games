import { getGcd, getRandomNumber } from '../helpers.js';

let currentFirstNumber = 0;
let currentSecondNumber = 0;

const brainGcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestion: () => {
    currentFirstNumber = getRandomNumber(1, 10);
    currentSecondNumber = getRandomNumber(1, 10);
    return `${currentFirstNumber} ${currentSecondNumber}`;
  },
  getCorrectAnswer: () => String(getGcd(currentFirstNumber, currentSecondNumber)),
};

export default brainGcd;
