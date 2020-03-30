/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */

const noStrings = array =>
    array.filter(item => typeof item !== "string");

console.log(noStrings(["noah", "amy", "shlomo", 2, 6, 2, "david"]));
/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */

const justStrings = array =>
    array.filter(item => typeof item === "string");

console.log(justStrings(["noah", "amy", "shlomo", 2, 6, 2, "david"]));
/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = array =>
    array.filter(item => item.length > 5);

console.log(justStringsLongerThan5(["noah", "amy", "shlomo", 2, 6, 2, "david"]));
/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

const numbersMoreThan13 = array =>
    array.filter(item => typeof "number").filter(item => item > 13);

console.log(numbersMoreThan13(["noah", "amy", "shlomo", 2, 6, 23, "david"]));

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = array =>
    array.filter(item => typeof item === "object");

console.log(objectsOnly(["noah", "amy", { name: "shlomo" }, 2, 6, 23, "david"]));

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = array =>
    array.filter(item => item || item === 0);

console.log(truthyOnly([
    "kitten",
    {},
    0,
    false,
    { name: "Alex" },
    ["pet"],
    26
]));