global.console = {
	log: jest.fn()
};

// Exercise #
describe("Greet all visitors", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("console.log needs to be called for each visitor", () => {
		const visitorsCount = visitors.length;
		greetVisitors();

		expect(global.console.log).toHaveBeenCalledTimes(visitorsCount);
	});
});

// Exercise 2
describe("getElementIndex", () => {
	test("should be declared", () => {
		expect(typeof getElementIndex).toEqual("function");
	});

	test("should return correct index", () => {
		const result = getElementIndex(6);

		expect(result).toEqual(4);
	});

	test("should return 'Item not found'", () => {
		const result = getElementIndex(65);

		expect(result).toEqual("Item not found");
	});
});

// Exercise 3
describe("total", () => {
	test("should be declared", () => {
		expect(typeof total).toEqual("function");
	});

	test("should return a number", () => {
		expect(typeof total()).toEqual("number");
	});

	test("should return correct number", () => {
		expect(total()).toEqual(309);
	});
});

// Exercise 4
describe("addIndex", () => {
	test("addIndex should be declared", () => {
		expect(typeof addIndex).toEqual("function");
	});

	test("array should be modified", () => {
		addIndex();

		expect(numbersForIndexes).toEqual([6, 3, 18, 26, 88, 26, 15, 10]);
	});
});

// Exercise 5
describe("lowestNumber", () => {
	test("lowestNumber should be declared", () => {
		expect(typeof lowestNumber).toEqual("function");
	});

	test("should return the lowest integer", () => {
		expect(lowestNumber()).toEqual(-34);
	});
});