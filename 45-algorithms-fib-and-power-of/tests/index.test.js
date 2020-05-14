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
// Exercise 1
describe("generateFibonacci", () => {
	test("should calculate fibonacci correctly", () => {
		expect(generateFibonacci(1)).toEqual([0]);
		expect(generateFibonacci(2)).toEqual([0, 1]);
		expect(generateFibonacci(3)).toEqual([0, 1, 1]);
		expect(generateFibonacci(4)).toEqual([0, 1, 1, 2]);
		expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
		expect(generateFibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
		expect(generateFibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
		expect(generateFibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
		expect(generateFibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
		expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
	});
});

// Exercise 2
describe("isPowerOf", () => {
	test("should check is number a power of prime number", () => {
		expect(isPowerOf(27, 3)).toBe(true);
		expect(isPowerOf(28, 3)).toBe(false);
		expect(isPowerOf(0, 3)).toBe(false);
		expect(isPowerOf(1, 3)).toBe(false);
		expect(isPowerOf(-27, 3)).toBe(false);
	});
});

