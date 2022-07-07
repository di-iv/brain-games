#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/heplers.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let roundCount = 3;

function play(roundLeft) {
  if (roundLeft === 0) {
    console.log('Congratulations, Bill!');
    return;
  }
  const randomNumber = getRandomNumber(1, 100);
  console.log(`Question: ${randomNumber}`);
  const isNumberEven = randomNumber % 2 === 0;
  const correctAnswer = isNumberEven ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  const isNotCorrectUserAnswer = correctAnswer !== userAnswer;
  if (isNotCorrectUserAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log('Let\'s try again, Bill!');
    return;
  }
  console.log('Correct!');
  play(roundCount -= 1);
}
play(roundCount);
