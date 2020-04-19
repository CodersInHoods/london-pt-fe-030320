/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 * 
 * The array must be a Fibonacci sequence:
 * 
 * The next number is found by adding up the two numbers before it, 
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

const generateFibonacci = (num) => {
    const array = []; // set length of array to received number
    if (num <= 0) { // if received number is 0 or below 0 we do nothing. no time for hacks.
        return console.log("we don't take kindly to numbers below 0 or 0 here sir/madam!")
    } else { //otherwise we count.
        const start = 0; //initialize the first number in the array. always 0.
        for (let i = 0; i < num; i++) { //continue adding numbers until reaching received number
            if (i === 0) {

                array.push(start); // 0. [0]


            } else if (i === 1) {
                array.push(start + 1); //1. [0,1]

            } else {
                array.push(array[i - 1] + array[i - 2]); // 2.  [0,1,1]

            }
        }
        return array;
    }
}

generateFibonacci(1);

/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 * 
 * number – a number
 * primeNumber – a number (a prime number)
 * 
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */

const isPowerOf = (number, primeNumber) => {
    if (number <= 0) {
        return false;
    } else if (number % primeNumber === 0) {
        return true;
    } else {
        return false;
    }
}
isPowerOf(27, 3);