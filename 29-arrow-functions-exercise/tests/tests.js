// Exercise 1
describe("isEqual", () => {
	test("isEqual is declared and has type function", () => {
		expect(typeof isEqual).toEqual("function");
	});

	test("isEqual is an arrow function", () => {
		const isArrowFunction = isEqual.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("isEqual compare correctly", () => {
		expect(isEqual(2, 2)).toBe(true);
		expect(isEqual(2, 3)).toBe(false);
		expect(isEqual(2, "2")).toBe(false);
	});
});

// Exercise 2
describe("isLessOrEqual0", () => {
	test("isLessOrEqual0 is declared and has type function", () => {
		expect(typeof isLessOrEqual0).toEqual("function");
	});

	test("isLessOrEqual0 is an arrow function", () => {
		const isArrowFunction = isLessOrEqual0.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("isLessOrEqual0 return correct value", () => {
		expect(isLessOrEqual0(2)).toBe(false);
		expect(isLessOrEqual0(0)).toBe(true);
		expect(isLessOrEqual0(-1)).toBe(true);
	});
});

// Exercise 3
describe("timeToSeconds", () => {
	test("timeToSeconds is declared and has type function", () => {
		expect(typeof timeToSeconds).toEqual("function");
	});

	test("timeToSeconds is an arrow function", () => {
		const isArrowFunction = timeToSeconds.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("timeToSeconds should return correct amount of seconds", () => {
		expect(timeToSeconds(1, 31)).toEqual(5460);
	});

	test("timeToSeconds should return correct amount if you don't pass minutes", () => {
		expect(timeToSeconds(1)).toEqual(3600);
	});

	test("timeToSeconds should return 0", () => {
		expect(timeToSeconds()).toEqual(0);
	});
});

// Exercise 4
describe("isGameWorthTheCandle", () => {
	test("isGameWorthTheCandle is declared and has type function", () => {
		expect(typeof isGameWorthTheCandle).toEqual("function");
	});

	test("isGameWorthTheCandle is an arrow function", () => {
		const isArrowFunction = isGameWorthTheCandle.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test('isGameWorthTheCandle(0.9, 30, 5) should return true', () => {
		expect(isGameWorthTheCandle(0.9, 30, 5)).toBe(true);
	})

	test('isGameWorthTheCandle(0.2, 3, 10) should return false', () => {
		expect(isGameWorthTheCandle(0.2, 3, 10)).toBe(false);
	})
});

// Exercise 5
describe("longerString", () => {
	test("longerString is declared and has type function", () => {
		expect(typeof longerString).toEqual("function");
	});

	test("longerString is an arrow function", () => {
		const isArrowFunction = longerString.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});
	
	test("longerString should return longer string", () => {
		expect(longerString('Cat', 'Kitten')).toEqual('Kitten');
	});

	test("longerString should return equal", () => {
		expect(longerString('Cat', 'Dog')).toEqual('Equal!');
	});
});
