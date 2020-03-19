// Exercise 1
describe("firstName", () => {
	test("user has property 'firstName'", () => {
		expect(user.firstName).toBeTruthy()
	});

	test("user firstName is a string", () => {
		expect(typeof user.firstName).toEqual('string')
	});
});

// Exercise 2
describe("lastName", () => {
	test("user has property 'lastName'", () => {
		expect(user.lastName).toBeTruthy()
	});

	test("user lastName is a string", () => {
		expect(typeof user.lastName).toEqual('string')
	});
});

// Exercise 3
describe("addANewProperty", () => {
	test("addANewProperty is declared", () => {
		expect(typeof addANewProperty).toEqual('function')
	});

	test("addANewProperty set a new property with a new value", () => {
		addANewProperty('age', 25);

		expect(user.age).toEqual(25)
	});
});
