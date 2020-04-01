// install and  import "readline-sync" npm package before you do exercises
readlineSync = require('readline-sync');
const chalk = require('chalk');
const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
user.firstName = readlineSync.question('First name please?');

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
user.lastName = readlineSync.question('Last name please?');

console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
user.age = readlineSync.questionInt('age please?');

/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
user.email = readlineSync.questionEMail('email please?');

/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
    `Here what we have, your full name is ${chalk.red(user.firstName)} ${chalk.blue(user.lastName)}. 
    You are ${chalk.inverse(user.age)} and if we need to contact with you we can send 
    a letter to ${chalk.bgYellow.white(user.email)} `
);
// Exercise #
describe("", () => {
	test("", () => {});
});
