global.console = {
	log: jest.fn(),
	info: jest.fn(),
	error: jest.fn()
};

// Exercise 1
describe("myName", () => {
	test("myName is declared", () => {
		expect(myName).toBeDefined();
	});

	test("myName should log a valid string", () => {
		myName("Alex");

		expect(global.console.log).toHaveBeenCalledWith("My name is Alex");
	});
});

// Exercise 2
describe("myAge", () => {
	test("myAge is declared", () => {
		expect(myAge).toBeDefined();
	});

	test("myAge should log a valid string", () => {
		myAge(16);

		expect(global.console.log).toHaveBeenCalledWith("I'm 16 years old");
	});
});

// Exercise 3
describe("aboutMe", () => {
	test("aboutMe is declared", () => {
		expect(aboutMe).toBeDefined();
	});

	test("aboutMe should log a valid string", () => {
		aboutMe("Lviv", "Ukraine");

		expect(global.console.log).toHaveBeenCalledWith("I'm from Lviv, Ukraine");
	});
});

// Exercise 4
describe("logSum", () => {
	test("logSum is declared", () => {
		expect(logSum).toBeDefined();
	});

	test("logSum should log sum", () => {
		logSum(50, 20);

		expect(global.console.log).toHaveBeenCalledWith(70);
	});
});
