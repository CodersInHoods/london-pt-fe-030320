global.console = {
	log: jest.fn()
};
// Exercise 1
describe("forEachCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("forEachCallback is declared and has type function", () => {
		expect(typeof forEachCallback).toEqual("function");
	});

	test("forEachCallback is an arrow function", () => {
		const isArrowFunction = forEachCallback.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("forEachCallback log a parameter", () => {
		forEachCallback("CodersInHoods");
		expect(global.console.log).toHaveBeenCalledWith("CodersInHoods");
	});
});

describe("logAllWithExternalCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logAllWithExternalCallback is declared and has type function", () => {
		expect(typeof logAllWithExternalCallback).toEqual("function");
	});

	test("logAllWithExternalCallback uses forEach", () => {
		const isUsingForeach = logAllWithExternalCallback
			.toString()
			.includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("logAllWithExternalCallback uses forEachCallback", () => {
		const isUsingExternalCallback = logAllWithExternalCallback
			.toString()
			.includes("forEachCallback");
		expect(isUsingExternalCallback).toBe(true);
	});

	test("logAllWithExternalCallback log a parameter", () => {
		const param = ["CodersInHoods", 13, "programming"];
		logAllWithExternalCallback(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});
});

describe("logAllWithAnonymousCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logAllWithAnonymousCallback is declared and has type function", () => {
		expect(typeof logAllWithAnonymousCallback).toEqual("function");
	});

	test("logAllWithAnonymousCallback uses forEach", () => {
		const isUsingForeach = logAllWithAnonymousCallback
			.toString()
			.includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("logAllWithAnonymousCallback doesn't use forEachCallback", () => {
		const isUsingExternalCallback = logAllWithAnonymousCallback
			.toString()
			.includes("forEachCallback");
		expect(isUsingExternalCallback).toBe(false);
	});

	test("logAllWithAnonymousCallback log a parameter", () => {
		const param = ["CodersInHoods", 13, "programming"];
		logAllWithAnonymousCallback(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});
});

// Exercise 2
describe("dividableBy3", () => {
	test("dividableBy3 is declared and has type function", () => {
		expect(typeof dividableBy3).toEqual("function");
	});

	test("dividableBy3 is arrow function", () => {
		const isArrowFunc = dividableBy3.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("dividableBy3 uses forEach", () => {
		const isUsingForeach = dividableBy3.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("dividableBy3 filter array", () => {
		expect(dividableBy3([3, 11, 27, 4, 9])).toEqual([3, 27, 9]);
	});
});

// Exercise 3
describe("oddNumbersSum", () => {
	test("oddNumbersSum is declared and has type function", () => {
		expect(typeof oddNumbersSum).toEqual("function");
	});

	test("oddNumbersSum is arrow function", () => {
		const isArrowFunc = oddNumbersSum.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("oddNumbersSum uses forEach", () => {
		const isUsingForeach = oddNumbersSum.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("oddNumbersSum should return correct total", () => {
		expect(oddNumbersSum([3, 11, 28, 4, 9])).toEqual(23);
	});
});

// Exercise 4
describe("totalLength", () => {
	test("totalLength is declared and has type function", () => {
		expect(typeof totalLength).toEqual("function");
	});

	test("totalLength is arrow function", () => {
		const isArrowFunc = totalLength.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("totalLength uses forEach", () => {
		const isUsingForeach = totalLength.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("totalLength should return correct total", () => {
		expect(totalLength(['dog', 2, 'kitten', {name: 'Alex'}])).toEqual(9);
		expect(totalLength(['dog', 2, 'cat', {name: 'Alex'}])).toEqual(6);
	});
});
