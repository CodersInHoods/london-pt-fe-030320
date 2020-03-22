/**
 * create an array "animals" with "cat"
 */
const animals = ["cat"];
/**
 * Exercise 1
 *
 * add a "dog" to the end of your 'animals'
 * 
 * PS: console.log() the result to see the difference
 */
animals.push("dog");
console.log(animals);

/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your 'animals'
 * 
 * PS: console.log() the result to see the difference
 */

animals.unshift("rabbit");
console.log(animals);
/**
 * Exercise 3
 *
 * add a "puma" to position 2 in "animals"
 * 
 * PS: console.log() the result to see the difference
 */
animals.splice(1, 0, "puma");
console.log(animals);

/**
 * create an array "wildAnimals" with "lion"
 */

const wildAnimals = ["lion"]
    /**
     * create an array "moreWildAnimals" with "giraffe" and "elephant"
     */
const moreWildAnimals = ["giraffe", "elephant"];
/**
 * Exercise 4
 *
 * combine wildAnimals and moreWildAnimals into one array
 * and save it into variable combinedWildAnimals
 * 
 * PS: console.log() the result to see the difference
 */
const combinedWildAnimals = wildAnimals.concat(moreWildAnimals);
console.log(combinedWildAnimals);
describe("animals", () => {
	test("animals should be declared", () => {
		expect(Array.isArray(animals)).toBe(true);
	});
});

// Exercise 1
describe("'dog' is the last element in animals", () => {
	test("'dog' should be the last in animals", () => {
		expect(animals[animals.length - 1]).toEqual("dog");
	});
});

// Exercise 2
describe("'rabbit' is the first element in animals", () => {
	test("'rabbit' should be the first in animals", () => {
		expect(animals[0]).toEqual("rabbit");
	});
});

// Exercise 3
describe("'puma' has index 1 in animals", () => {
	test("'puma' should be second in animals", () => {
		expect(animals[1]).toEqual("puma");
	});
});

describe("wildAnimals", () => {
	test("wildAnimals should be declared", () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});
});

// Exercise 4
describe("combinedWildAnimals", () => {
	test("combinedWildAnimals contains all animals from wildAnimals and moreWildAnimals", () => {
    expect(combinedWildAnimals).toEqual(["lion", "giraffe",  "elephant"]);
  });
});
