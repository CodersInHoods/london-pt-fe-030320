// Exercise 1
describe("wildAnimals", () => {
	test('"wildAnimals" should be declared', () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});

	test('"wildAnimals" should contain at least 4 elements', () => {
		expect(wildAnimals.length > 3).toBe(true);
	});
});

// Exercise 2
describe("pets", () => {
	test('"pets" should be declared', () => {
		expect(Array.isArray(pets)).toBe(true);
	});

	test('"pets" should contain at least 3 elements', () => {
		expect(pets.length >= 3).toBe(true);
	});
});

// Exercise 3
describe("animals", () => {
	test('create a variable "animals"', () => {
		expect(Array.isArray(animals)).toBe(true);
	});

	test("animals should contain all animals from wildAnimals and pets", () => {
		expect(animals).toEqual([...wildAnimals, ...pets]);
	});
});

// Exercise 4
describe("dogIndex", () => {
	test("dogIndex should be declared", () => {
		expect(typeof dogIndex).toEqual("number");
	});

	test("dogIndex should be correct dog index", () => {
		expect(dogIndex).toEqual(5);
	});
});

// Exercise 5
describe("pandaIndex", () => {
	test("pandaIndex should be declared", () => {
		expect(typeof pandaIndex).toEqual("number");
	});

	test("pandaIndex should be correct panda index", () => {
		expect(pandaIndex).toEqual(2);
	});
});

describe("numbers", () => {
	test("numbers should be declared and be an array", () => {
		expect(Array.isArray(numbers)).toBe(true);
	});

	test("numbers should contain 18 digits", () => {
		expect(numbers.length).toBe(18);
	});
});

// Exercise 6
describe("first4DigitIndex", () => {
	test("first4DigitIndex should be declared", () => {
		expect(typeof first4DigitIndex).toEqual("number");
	});

	test("first4DigitIndex should be equal to correct index", () => {
		expect(first4DigitIndex).toEqual(3);
	});
});

// Exercise 7
describe("last4DigitIndex", () => {
	test("last4DigitIndex should be declared", () => {
		expect(typeof last4DigitIndex).toEqual("number");
	});

	test("last4DigitIndex should be equal to correct index", () => {
		expect(last4DigitIndex).toEqual(14);
	});
});

// Exercise 8
describe("hasSeven", () => {
	test("hasSeven should be declared", () => {
		expect(typeof hasSeven).toEqual("boolean");
	});

	test("hasSeven should be equal true", () => {
		expect(hasSeven).toBe(true);
	});
});

// Exercise 9
describe("hasTwenty", () => {
	test("hasTwenty should be declared", () => {
		expect(typeof hasTwenty).toEqual("boolean");
	});

	test("hasTwenty should be equal false", () => {
		expect(hasTwenty).toBe(false);
	});
});

// Exercise 10
describe("moreThanFour", () => {
	test("moreThanFour should be declared", () => {
		expect(typeof moreThanFour).toEqual("number");
	});

	test("moreThanFour return first number that is more than 4", () => {
		expect(moreThanFour).toEqual(5);
	});
});

// Exercise 11
describe("moreThanSevenIndex", () => {
	test("moreThanSevenIndex should be declared", () => {
		expect(typeof moreThanSevenIndex).toEqual("number");
	});

	test("moreThanSevenIndex return first number that is more than 7", () => {
		expect(moreThanSevenIndex).toEqual(7);
	});
});
