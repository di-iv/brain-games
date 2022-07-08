import readlineSync from 'readline-sync';

let userName;

function sayHello() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

function getUserName() {
  return userName;
}

export { sayHello, getUserName };
