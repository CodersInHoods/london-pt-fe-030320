// Exercise 1
describe("noStrings", () => {
	test("noStrings is declared and has type function", () => {
		expect(typeof noStrings).toEqual("function");
	});

	test("noStrings is an arrow function", () => {
		const isArrowFunction = noStrings.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("noStrings use filter", () => {
		const hasFilter = noStrings.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("noStrings should return remove all strings", () => {
		const param = ["kitten", 2, { name: "Alex" }, ["pet"]];
		expect(noStrings(param)).toEqual([2, { name: "Alex" }, ["pet"]]);
	});
});

// Exercise 2
describe("justStrings", () => {
	test("justStrings is declared and has type function", () => {
		expect(typeof justStrings).toEqual("function");
	});

	test("justStrings is an arrow function", () => {
		const isArrowFunction = justStrings.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("justStrings use filter", () => {
		const hasFilter = justStrings.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("justStrings should return all strings", () => {
		const param1 = ["kitten", 2, { name: "Alex" }, ["pet"]];
		const param2 = ["kitten", 2, "puppy", ["pet"]];

		expect(justStrings(param1)).toEqual(["kitten"]);
		expect(justStrings(param2)).toEqual(["kitten", "puppy"]);
	});
});

// Exercise 3
describe("justStringsLongerThan5", () => {
	test("justStringsLongerThan5 is declared and has type function", () => {
		expect(typeof justStringsLongerThan5).toEqual("function");
	});

	test("justStringsLongerThan5 is an arrow function", () => {
		const isArrowFunction = justStringsLongerThan5.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("justStringsLongerThan5 use filter", () => {
		const hasFilter = justStringsLongerThan5.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("justStringsLongerThan5 should return strings longer than 5 chars", () => {
		const param1 = ["kitten", 2, "cat", ["pet"], "Coders In Hoods", 26];
		const param2 = ["kitten", 2, "puppy", ["pet"], "CH"];

		expect(justStringsLongerThan5(param1)).toEqual([
			"kitten",
			"Coders In Hoods"
		]);
		expect(justStringsLongerThan5(param2)).toEqual(["kitten"]);
	});
});

// Exercise 4
describe("numbersMoreThan13", () => {
	test("numbersMoreThan13 is declared and has type function", () => {
		expect(typeof numbersMoreThan13).toEqual("function");
	});

	test("numbersMoreThan13 is an arrow function", () => {
		const isArrowFunction = numbersMoreThan13.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("numbersMoreThan13 use filter", () => {
		const hasFilter = numbersMoreThan13.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("numbersMoreThan13 should return numbers more than 13", () => {
		const param1 = ["kitten", 2, "cat", 15, ["pet"], 26];
		const param2 = ["kitten", 18, "puppy", 13, ["pet"]];
		const param3 = ["kitten", 2, "puppy", 13, ["pet"]];

		expect(numbersMoreThan13(param1)).toEqual([15, 26]);
		expect(numbersMoreThan13(param2)).toEqual([18]);
		expect(numbersMoreThan13(param3)).toEqual([]);
	});
});

// Exercise 5
describe("objectsOnly", () => {
	test("objectsOnly is declared and has type function", () => {
		expect(typeof objectsOnly).toEqual("function");
	});

	test("objectsOnly is an arrow function", () => {
		const isArrowFunction = objectsOnly.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("objectsOnly use filter", () => {
		const hasFilter = objectsOnly.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("objectsOnly should return objects only", () => {
		const param1 = ["kitten", 2, { name: "Alex" }, 15, ["pet"], 26];
		const param2 = ["kitten", 18, "puppy", 13, ["pet"]];

		expect(objectsOnly(param1)).toEqual([{ name: "Alex" }, ["pet"]]);
		expect(objectsOnly(param2)).toEqual([["pet"]]);
	});
});

// Exercise 6
describe("truthyOnly", () => {
	test("truthyOnly is declared and has type function", () => {
		expect(typeof truthyOnly).toEqual("function");
	});

	test("truthyOnly is an arrow function", () => {
		const isArrowFunction = truthyOnly.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("truthyOnly use filter", () => {
		const hasFilter = truthyOnly.toString().includes(".filter(");
		expect(hasFilter).toBe(true);
	});

	test("truthyOnly should return objects only", () => {
		const param1 = [
			"kitten",
			{},
			0,
			{ name: "Alex" },
			undefined,
			NaN,
			["pet"],
			"",
			26,
			false
		];

		expect(truthyOnly(param1)).toEqual([
			"kitten",
			{},
			0,
			{ name: "Alex" },
			["pet"],
			26
		]);
	});
});
