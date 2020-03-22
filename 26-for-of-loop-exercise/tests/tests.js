// Exercise #
describe("getIntegersOnly", () => {
	test("getIntegersOnly is declared with type function", () => {
		expect(typeof getIntegersOnly).toEqual("function");
	});

	test("getIntegersOnly returns only integers", () => {
		const param = ["kitten", 34, "puppy", 12, "24", 64, 1, 5, 2, 8, "panda"];
		expect(getIntegersOnly(param)).toEqual([34, 12, 64, 1, 5, 2, 8]);
	});

	test("getIntegersOnly returns empty array", () => {
		const param = ["kitten", "puppy", "24", "panda"];
		expect(getIntegersOnly(param)).toEqual([]);
	});
});

// Exercise 2
describe("getEvenNumbers", () => {
	test("getEvenNumbers is declared with type function", () => {
		expect(typeof getEvenNumbers).toEqual("function");
	});

	test("getEvenNumbers returns even integers only", () => {
		const param = [34, 12, 64, 1, 5, 2, 8, 0];
		expect(getEvenNumbers(param)).toEqual([34, 12, 64, 2, 8]);
	});

	test("getEvenNumbers returns empty array", () => {
		const param = [1, 7, 3, 13];
		expect(getEvenNumbers(param)).toEqual([]);
	});
});

// Exercise 3
describe("getEvenNumbersFromMixedArray", () => {
	test("getEvenNumbersFromMixedArray is declared with type function", () => {
		expect(typeof getEvenNumbersFromMixedArray).toEqual("function");
	});

	test("getEvenNumbersFromMixedArray returns even integers only", () => {
		const param = ["kitten", 34, "puppy", 12, "24", 64, 1, 5, 2, 8, "panda"];
		expect(getEvenNumbersFromMixedArray(param)).toEqual([34, 12, 64, 2, 8]);
	});

	test("getEvenNumbersFromMixedArray returns empty array", () => {
		const param = ["kitten", "puppy", "24", 1, 5, "panda"];
		expect(getEvenNumbersFromMixedArray(param)).toEqual([]);
	});
});

// Exercise 4
describe("getOddNumbers", () => {
	test("getOddNumbers is declared with type function", () => {
		expect(typeof getOddNumbers).toEqual("function");
	});

	test("getOddNumbers returns even integers only", () => {
		const param = [34, 12, 64, 1, 5, 2, 8];
		expect(getOddNumbers(param)).toEqual([1, 5]);
	});

	test("getOddNumbers returns empty array", () => {
		const param = [2, 4, 6, 8];
		expect(getOddNumbers(param)).toEqual([]);
	});
});

// Exercise 5
describe("evenOddTransform", () => {
	test("evenOddTransform is declared with type function", () => {
		expect(typeof evenOddTransform).toEqual("function");
	});

	test("evenOddTransform returns transformed array", () => {
		const param = [34, 12, 64, 1, 5, 2, 8];
		expect(evenOddTransform(param)).toEqual([33, 11, 63, 2, 6, 1, 7]);
	});
});