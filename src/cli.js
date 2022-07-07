import readlineSync from 'readline-sync';

let userName;

function sayHello() {
  userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
}

function getUserName() {
  return userName;
}

export { sayHello, getUserName };
