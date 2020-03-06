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
describe("myAnimalWithLog", () => {
	test("myAnimalWithLog is declared and log a string with your favorite animal", () => {
		myAnimalWithLog();

		expect(global.console.log).toHaveBeenCalledWith(
			"My favorite animal is " + myFavoriteAnimal
		);
	});
});

// Exercise 3
describe("myAnimalWithWarn", () => {
	test("myAnimalWithWarn is declared and warn a string with your favorite animal", () => {
		myAnimalWithWarn();

		expect(global.console.warn).toHaveBeenCalledWith(
			"My favorite animal is " + myFavoriteAnimal
		);
	});
});

// Exercise 4
describe("myAnimalWithError", () => {
	test("myAnimalWithError is declared and error a string with your favorite animal", () => {
		myAnimalWithError();

		expect(global.console.error).toHaveBeenCalledWith(
			"My favorite animal is " + myFavoriteAnimal
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
