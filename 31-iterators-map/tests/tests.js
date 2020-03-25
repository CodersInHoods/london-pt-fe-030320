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
