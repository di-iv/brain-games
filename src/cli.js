import readlineSync from 'readline-sync';

function sayHello() {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
}

export default sayHello;
