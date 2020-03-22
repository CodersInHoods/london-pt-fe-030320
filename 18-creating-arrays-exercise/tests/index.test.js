/**
 * Exercise 1
 *
 * Create a variable "wildAnimals" and and 'tiger', 'rabbit',
 * 'panda' and 'giraffe' into it as strings
 */
const wildAnimals = ["tiger", "rabbit", "panda", "giraffe"];

/**
 * Exercise 2
 *
 * Create a variable "pets" and and 'cat', 'dog' and 'hamster'
 * into it as strings(must contains dog)
 */
const pets = ["cat", "dog", "hamster"];

/**
 * Exercise 3
 *
 * Create a variable "animals". It should include all wildAnimals
 * and all pets. Find the way to concatenate your arrays with JS
 */
const animals = wildAnimals.concat(pets);
console.log(animals);

/**
 * Exercise 4
 *
 * create a dogIndex variable and by using "findIndex" JS method
 * find dog index in "animals" array
 */


const dogIndex = animals.findIndex(element => element == "dog");
console.log(dogIndex);

/**
 * Exercise 5
 *
 * create a pandaIndex variable and by using "indexOf" JS method
 * find panda index in "animals" array
 */

const pandaIndex = animals.indexOf("panda");
console.log(pandaIndex);
/**
 * create a variable with name "numbers"  which will be an array
 * and contain numbers from 1 to 9(ascending) and from 9 to 1(descending)
 * (each number should be twice in this array).
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/**
 * Exercise 6
 *
 * Create variable "first4DigitIndex" and from "numbers"
 * find index of first instance of digit 4
 */
const first4DigitIndex = numbers.indexOf(4);
console.log(first4DigitIndex);

/**
 * Exercise 7
 *
 * Create variable "last4DigitIndex" and from "numbers"
 * find index of last instance of digit 4
 */

const last4DigitIndex = numbers.indexOf(4, first4DigitIndex + 1);
console.log(last4DigitIndex);
/**
 * Exercise 8
 *
 * Create variable "hasSeven" check does "numbers"
 * contains 7
 */
const hasSeven = numbers.includes(7);
console.log(hasSeven);

/**
 * Exercise 9
 *
 * Create variable "hasTwenty" check does "numbers"
 * contains 20
 */

const hasTwenty = numbers.includes(20);
console.log(hasTwenty);
/**
 * Exercise 10
 *
 * Create variable "moreThanFour" returns first number
 * "numbers" that are more than 4
 */
const moreThanFour = numbers.indexOf(4) + 2;

console.log(numbers[moreThanFour]);

/**
 * Exercise 11
 *
 * Create variable "moreThanSevenIndex" returns first number
 * "numbers" that are more than 7
 */
const moreThanSevenIndex = numbers.indexOf(7) + 1;
console.log(numbers[moreThanSevenIndex]);
// Exercise 1
describe("wildAnimals", () => {
	test('"wildAnimals" should be declared', () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});

	test('"wildAnimals" should contain at least 4 elements', () => {
		expect(wildAnimals.length > 3).toBe(true);
	});
});

// Exercise 2
describe("pets", () => {
	test('"pets" should be declared', () => {
		expect(Array.isArray(pets)).toBe(true);
	});

	test('"pets" should contain at least 3 elements', () => {
		expect(pets.length >= 3).toBe(true);
	});
});

// Exercise 3
describe("animals", () => {
	test('create a variable "animals"', () => {
		expect(Array.isArray(animals)).toBe(true);
	});

	test("animals should contain all animals from wildAnimals and pets", () => {
		expect(animals).toEqual([...wildAnimals, ...pets]);
	});
});

// Exercise 4
describe("dogIndex", () => {
	test("dogIndex should be declared", () => {
		expect(typeof dogIndex).toEqual("number");
	});

	test("dogIndex should be correct dog index", () => {
		expect(dogIndex).toEqual(5);
	});
});

// Exercise 5
describe("pandaIndex", () => {
	test("pandaIndex should be declared", () => {
		expect(typeof pandaIndex).toEqual("number");
	});

	test("pandaIndex should be correct panda index", () => {
		expect(pandaIndex).toEqual(2);
	});
});

describe("numbers", () => {
	test("numbers should be declared and be an array", () => {
		expect(Array.isArray(numbers)).toBe(true);
	});

	test("numbers should contain 18 digits", () => {
		expect(numbers.length).toBe(18);
	});
});

// Exercise 6
describe("first4DigitIndex", () => {
	test("first4DigitIndex should be declared", () => {
		expect(typeof first4DigitIndex).toEqual("number");
	});

	test("first4DigitIndex should be equal to correct index", () => {
		expect(first4DigitIndex).toEqual(3);
	});
});

// Exercise 7
describe("last4DigitIndex", () => {
	test("last4DigitIndex should be declared", () => {
		expect(typeof last4DigitIndex).toEqual("number");
	});

	test("last4DigitIndex should be equal to correct index", () => {
		expect(last4DigitIndex).toEqual(14);
	});
});

// Exercise 8
describe("hasSeven", () => {
	test("hasSeven should be declared", () => {
		expect(typeof hasSeven).toEqual("boolean");
	});

	test("hasSeven should be equal true", () => {
		expect(hasSeven).toBe(true);
	});
});

// Exercise 9
describe("hasTwenty", () => {
	test("hasTwenty should be declared", () => {
		expect(typeof hasTwenty).toEqual("boolean");
	});

	test("hasTwenty should be equal false", () => {
		expect(hasTwenty).toBe(false);
	});
});

// Exercise 10
describe("moreThanFour", () => {
	test("moreThanFour should be declared", () => {
		expect(typeof moreThanFour).toEqual("number");
	});

	test("moreThanFour return first number that is more than 4", () => {
		expect(moreThanFour).toEqual(5);
	});
});

// Exercise 11
describe("moreThanSevenIndex", () => {
	test("moreThanSevenIndex should be declared", () => {
		expect(typeof moreThanSevenIndex).toEqual("number");
	});

	test("moreThanSevenIndex return first number that is more than 7", () => {
		expect(moreThanSevenIndex).toEqual(7);
	});
});
