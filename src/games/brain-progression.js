import { generateProgression, getRandomNumber } from '../helpers.js';

let currentProgression = {};

const brainProgression = {
  rules: 'What number is missing in the progression?',
  getQuestion: () => {
    const progressionLength = getRandomNumber(5, 10);
    const progressionStep = getRandomNumber(1, 15);
    const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);
    currentProgression = generateProgression(progressionLength, progressionStep, hiddenNumberIndex);
    return currentProgression.progression;
  },
  getCorrectAnswer: () => String(currentProgression.hiddenNumber),
};

export default brainProgression;
