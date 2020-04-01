// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
array = [1, 4, -6, 8, -9, 4, -2];

const convertToPositive = array =>
    array.map(item => {
        if (item < 0) {
            item = item * -1;
        }
        return item;
    })

console.log(convertToPositive(array));


/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const users = [
    { name: 'Alex', age: 26 },
    { name: 'John', age: 25 }
]

const getAllNames = users =>
    users.map(elem => elem.name);

console.log(getAllNames([
    { name: 'Alex', age: 26 },
    { name: 'John', age: 25 }
]));



/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const names = [`niv`, `ami`, `shimon`];

const greetAll = names =>
    names.map(name => `Hi, ${name}!`);


console.log(greetAll([`niv`, `ami`, `shimon`]));

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const multiplyAllNumbers = array =>
    array.map(elem => {
        if (typeof elem === "number") {
            elem = elem * 5;
            return elem;
        } else {
            return elem;
        }
    })

console.log(multiplyAllNumbers(["Alex", 6, "John", 7, "Mimi", 4]));
// Exercise 1
describe("convertToPositive", () => {
	test("convertToPositive is declared and has type function", () => {
		expect(typeof convertToPositive).toEqual("function");
	});

	test("convertToPositive is an arrow function", () => {
		const isArrowFunction = convertToPositive.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("convertToPositive use map", () => {
		const hasMap = convertToPositive.toString().includes(".map(");
		expect(hasMap).toBe(true);
	});

	test("convertToPositive should convert all numbers to positive", () => {
		expect(convertToPositive([1, 2, -5, 8, -4])).toEqual([1, 2, 5, 8, 4]);
	});
});

// Exercise 2
describe("getAllNames", () => {
	test("getAllNames is declared and has type function", () => {
		expect(typeof getAllNames).toEqual("function");
	});

	test("getAllNames is an arrow function", () => {
		const isArrowFunction = getAllNames.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("getAllNames use map", () => {
		const hasMap = getAllNames.toString().includes(".map(");
		expect(hasMap).toBe(true);
	});

	test("getAllNames should return array of names", () => {
		const users = [
			{ name: "Alex", age: 26 },
			{ name: "John", age: 25 },
			{ name: "Mimi", age: 1 }
		];

		const users2 = [
			{ name: "Sam", age: 26 },
			{ name: "Vasile", age: 25 }
		];

		expect(getAllNames(users)).toEqual(["Alex", "John", "Mimi"]);
		expect(getAllNames(users2)).toEqual(["Sam", "Vasile"]);
	});
});

// Exercise 3
describe("greetAll", () => {
	test("greetAll is declared and has type function", () => {
		expect(typeof greetAll).toEqual("function");
	});

	test("greetAll is an arrow function", () => {
		const isArrowFunction = greetAll.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("greetAll use map", () => {
		const hasMap = greetAll.toString().includes(".map(");
		expect(hasMap).toBe(true);
	});

	test("greetAll should return array of greetings", () => {
		const users = ["Alex", "John", "Mimi"];
		const users2 = ["Sam", "Vasile"];

		expect(greetAll(users)).toEqual(["Hi, Alex!", "Hi, John!", "Hi, Mimi!"]);
		expect(greetAll(users2)).toEqual(["Hi, Sam!", "Hi, Vasile!"]);
	});
});

// Exercise 4
describe("multiplyAllNumbers", () => {
	test("multiplyAllNumbers is declared and has type function", () => {
		expect(typeof multiplyAllNumbers).toEqual("function");
	});

	test("multiplyAllNumbers is an arrow function", () => {
		const isArrowFunction = multiplyAllNumbers.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("multiplyAllNumbers use map", () => {
		const hasMap = multiplyAllNumbers.toString().includes(".map(");
		expect(hasMap).toBe(true);
	});

	test("multiplyAllNumbers should return array with multiplied numbers", () => {
		const arr1 = ["Alex", "John", 5, "Mimi", 3];
		const arr2 = ["Alex", 6, "John", 7, "Mimi", 4];

		expect(multiplyAllNumbers(arr1)).toEqual(["Alex", "John", 25, "Mimi", 15]);
		expect(multiplyAllNumbers(arr2)).toEqual(["Alex", 30, "John", 35, "Mimi", 20]);
	});
});
