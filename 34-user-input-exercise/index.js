// install and  import "readline-sync" npm package before you do exercises
readlineSync = require('readline-sync');

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
let name = readlineSync.question("what is your name?")
console.log(`Hi ${name}`);

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`
        Hi $ { name }!`);
console.log("=====================");
console.log(`
        Let me do math
        for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */
let selectedSymbol = readlineSync.question(`what math shall I do for you? choose a symbol (*,/,+,-)`);

while (selectedSymbol !== `*` &&
    selectedSymbol !== '/' &&
    selectedSymbol !== "+" &&
    selectedSymbol !== `-`) {
    selectedSymbol = readlineSync.question(`what math shall I do for you? choose a symbol (*,/,+,-`);
}



/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number1 = readlineSync.question("can you give me a number?");
number1 = parseInt(number1, 10);
while (typeof number1 !== "number") {
    const number1 = readlineSync.question("can you give me a number?")
    number1 = parseInt(number1, 10);
}

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
let number2 = readlineSync.question("can you give me another number?");
number2 = parseInt(number2, 10);
while (typeof number2 !== "number") {
    const number2 = readlineSync.question("can you give me another number?")
    number2 = parseInt(number2, 10);
}

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
mathArray = ([number1, selectedSymbol, number2]);

console.log(eval(mathArray.join(``)));
const result = eval(mathArray.join(``))
console.log(result);

console.log("=====================");
console.log(`
        Here you go, the result is ${result}
        `);