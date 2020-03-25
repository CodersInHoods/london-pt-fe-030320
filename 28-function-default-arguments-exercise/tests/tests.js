global.console = {
	log: jest.fn()
};

// Exercise 1
describe("sayHi", () => {
	test("sayHi is declared and has type function", () => {
		expect(typeof sayHi).toEqual("function");
	});

	test("sayHi should greet with correct name", () => {
		expect(sayHi("Alex")).toEqual("Hi, Alex!");
	});

	test("sayHi should greet with incognito", () => {
		expect(sayHi()).toEqual("Hi, incognito!");
	});
});

// Exercise 2
describe("sayHi", () => {
	test("multiply is declared and has type function", () => {
		expect(typeof multiply).toEqual("function");
	});

	test("multiply should return correct value", () => {
		expect(multiply(5, 2)).toEqual(10);
	});

	test("multiply should return 5", () => {
		expect(multiply(5)).toEqual(5);
	});

	test("multiply should return 1", () => {
		expect(multiply()).toEqual(1);
	});
});

// Exercise 3
describe("logElements", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logElements is declared and has type function", () => {
		expect(typeof logElements).toEqual("function");
	});

	test("logElements should log all elements", () => {
		const param = [
			3,
			5,
			"hello",
			["cat", "dog", "panda"],
			{ name: "Alex", age: 25 }
		];

		logElements(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});

	test("logElements should log 'Nothing to log'", () => {
		logElements();

		expect(global.console.log).toHaveBeenCalledWith("Nothing to log");
	});
});

// Exercise 4
describe("getUserName", () => {
	test("getUserName is declared and has type function", () => {
		expect(typeof getUserName).toEqual("function");
	});

	test("getUserName should return correct value", () => {
		expect(getUserName({name: 'Alex Fellow'})).toEqual('Alex Fellow');
	});

	test("getUserName should return default value", () => {
		expect(getUserName()).toEqual('John Smith');
	});
});