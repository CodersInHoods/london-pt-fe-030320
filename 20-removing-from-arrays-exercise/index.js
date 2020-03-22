/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"]
 */

const carBrands = ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"];
/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
const lastBrand = carBrands.pop();
console.log(lastBrand);
/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
const firstBrand = carBrands.shift();
console.log(firstBrand);
/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */
const splicedBrand = carBrands.splice(carBrands.indexOf("Vauxhall"), 1);
console.log(splicedBrand);
/**
 * Exercise 4
 
 * in "carBrands" replace BMW with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
const replaced = carBrands.splice(carBrands.indexOf("BMW"), 1, "Rolls-Royce");
console.log(carBrands);