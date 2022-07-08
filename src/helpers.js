import { operators } from './consts.js';

function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomOperator() {
  const randomOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomOperatorIndex];
}

export { getRandomNumber, getRandomOperator };
