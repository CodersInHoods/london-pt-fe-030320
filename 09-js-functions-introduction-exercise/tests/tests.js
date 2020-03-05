global.console = {
	log: jest.fn(),
	info: jest.fn(),
	error: jest.fn()
};

// Exercise 1
describe("myFavoriteAnimal", () => {
	test("myFavoriteAnimal is declared and has value with type 'string'", () => {
		expect(myFavoriteAnimal).toBeDefined();
		expect(typeof myFavoriteAnimal).toBe("string");
	});
});

// Exercise 2
describe("myAnimal", () => {
	test("myAnimal is declared and log a string with your favorite animal", () => {
		myAnimal();

		expect(global.console.log).toHaveBeenCalledWith(
			"My favorite cat is " + myFavoriteAnimal
		);
	});
});

// Exercise 3
describe("myAnimal", () => {
	test("myAnimal is declared and warn a string with your favorite animal", () => {
		myAnimal();

		expect(global.console.warn).toHaveBeenCalledWith(
			"My favorite cat is " + myFavoriteAnimal
		);
	});
});

// Exercise 4
describe("myAnimal", () => {
	test("myAnimal is declared and error a string with your favorite animal", () => {
		myAnimal();

		expect(global.console.error).toHaveBeenCalledWith(
			"My favorite cat is " + myFavoriteAnimal
		);
	});
});

// Exercise 5
describe("myCity", () => {
	test("myCity is declared and alert been called", () => {
		myCity();

		expect(global.alert).toHaveBeenCalled();
	});
});
