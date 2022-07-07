import readlineSync from 'readline-sync';
import { sayHello, getUserName } from './cli.js';
import { allRoundsCount } from './consts.js';

function startGame(gameName) {
  sayHello();
  const userName = getUserName();
  console.log(gameName.rules);
  let playedRoundsCount = 0;

  function play() {
    if (playedRoundsCount === allRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = gameName.getQuestion();
    const correctAnswer = gameName.getCorrectAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isNotCorrectUserAnswer = correctAnswer !== userAnswer;
    if (isNotCorrectUserAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    playedRoundsCount += 1;
    play();
  }

  play();
}

export default startGame;
