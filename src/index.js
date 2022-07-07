import readlineSync from 'readline-sync';

function startGame(gameName) {
  console.log(gameName.rules);
  let roundCount = 3;

  function play(roundLeft) {
    if (roundLeft === 0) {
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
    play(roundCount -= 1);
  }

  play(roundCount);
}

export default startGame;
