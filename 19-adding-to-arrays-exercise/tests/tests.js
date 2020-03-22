describe("animals", () => {
	test("animals should be declared", () => {
		expect(Array.isArray(animals)).toBe(true);
	});
});

// Exercise 1
describe("'dog' is the last element in animals", () => {
	test("'dog' should be the last in animals", () => {
		expect(animals[animals.length - 1]).toEqual("dog");
	});
});

// Exercise 2
describe("'rabbit' is the first element in animals", () => {
	test("'rabbit' should be the first in animals", () => {
		expect(animals[0]).toEqual("rabbit");
	});
});

// Exercise 3
describe("'puma' has index 1 in animals", () => {
	test("'puma' should be second in animals", () => {
		expect(animals[1]).toEqual("puma");
	});
});

describe("wildAnimals", () => {
	test("wildAnimals should be declared", () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});
});

// Exercise 4
describe("combinedWildAnimals", () => {
	test("combinedWildAnimals contains all animals from wildAnimals and moreWildAnimals", () => {
    expect(combinedWildAnimals).toEqual(["lion", "giraffe",  "elephant"]);
  });
});
