import readlineSync from 'readline-sync';
import { allRoundsCount } from './consts.js';

function startGame(gameName) {
  console.log(gameName.rules);
  let playedRoundsCount = 0;

  function play() {
    if (playedRoundsCount === allRoundsCount) {
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
    playedRoundsCount += 1;
    play();
  }

  play();
}

export default startGame;
