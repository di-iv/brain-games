import { operators } from './consts.js';

function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomOperator() {
  const randomOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomOperatorIndex];
}

function getGcd(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
}

function generateProgression(progressionLength, progressionStep, hiddenNumberIndex) {
  const startNumber = getRandomNumber(1, 20);
  let progression = [startNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(startNumber + progressionStep * i);
  }
  const hiddenNumber = progression[hiddenNumberIndex];
  progression.splice(hiddenNumberIndex, 1, '..');
  progression = progression.join(' ');
  return { progression, hiddenNumber };
}

function isNumberEven(number) {
  return number % 2 === 0;
}

export {
  getRandomNumber,
  getRandomOperator,
  getGcd,
  generateProgression,
  isNumberEven,
};
