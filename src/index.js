import readlineSync from 'readline-sync';
import { numberOfRounds } from './consts.js';

function startGame(gameName) {
  console.log(gameName.rules);
  let rounds = numberOfRounds;

  function play(roundsLeft) {
    if (roundsLeft === 0) {
      console.log('Congratulations, Bill!');
      return;
    }
    const question = gameName.getQuestion();
    const correctAnswer = gameName.getCorrectAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isNotCorrectUserAnswer = correctAnswer !== userAnswer;
    if (isNotCorrectUserAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again, Bill!');
      return;
    }
    console.log('Correct!');
    play(rounds -= 1);
  }

  play(rounds);
}

export default startGame;
