#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/heplers.js';

console.log('What is the result of the expression?');
let roundCount = 3;

function play(roundLeft) {
  if (roundLeft === 0) {
    console.log('Congratulations, Bill!');
    return;
  }
  const firstRandomNumber = getRandomNumber(1, 10);
  const secondRandomNumber = getRandomNumber(1, 10);
  const operators = [
    { operator: '+', formula: (a, b) => a + b },
    { operator: '-', formula: (a, b) => a - b },
    { operator: '*', formula: (a, b) => a * b },
  ];
  const randomOperator = operators[getRandomNumber(0, 2)];
  console.log(`Question: ${firstRandomNumber} ${randomOperator.operator} ${secondRandomNumber}`);
  const correctAnswer = randomOperator.formula(firstRandomNumber, secondRandomNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  const isNotCorrectUserAnswer = correctAnswer !== Number(userAnswer);
  if (isNotCorrectUserAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log('Let\'s try again, Bill!');
    return;
  }
  console.log('Correct!');
  play(roundCount -= 1);
}
play(roundCount);
