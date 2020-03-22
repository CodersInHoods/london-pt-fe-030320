// Exercise 1
describe("user", () => {
	test("user is declared with type object", () => {
		expect(typeof user).toBe("object");
	});

	test("user has property firstName", () => {
		expect(user.firstName).toBeTruthy();
	});

	test("user has property lastName", () => {
		expect(user.lastName).toBeTruthy();
	});

	test("user has property age", () => {
		expect(user.age).toBeTruthy();
	});

	test("user age is a number", () => {
		expect(typeof user.age).toEqual("number");
	});
});

// Exercise 2
describe("allTypes", () => {
	test("allTypes is declared with type object", () => {
		expect(typeof allTypes).toBe("object");
	});

	test("allTypes has a property with type string", () => {
		const hasString = Object.values(allTypes).some(
			value => typeof value === "string"
		);
		expect(hasString).toBe(true);
	});

	test("allTypes has a property with type number", () => {
		const hasNumber = Object.values(allTypes).some(
			value => typeof value === "number"
		);
		expect(hasNumber).toBe(true);
	});

	test("allTypes has a property with type array", () => {
		const hasArray = Object.values(allTypes).some(value =>
			Array.isArray(value)
		);
		expect(hasArray).toBe(true);
	});

	test("allTypes has a property with type object", () => {
		const hasObject = Object.values(allTypes).some(
			value => typeof value === "object"
		);
		expect(hasObject).toBe(true);
	});

	test("allTypes has a property with type function", () => {
		const hasFunction = Object.values(allTypes).some(
			value => typeof value === "function"
		);
		expect(hasFunction).toBe(true);
	});

	test("allTypes has a property with type boolean", () => {
		const hasBoolean = Object.values(allTypes).some(
			value => typeof value === "boolean"
		);
		expect(hasBoolean).toBe(true);
	});
});

// Exercise 3
describe("createMovieObject", () => {
	test("createMovieObject is declared", () => {
		expect(typeof createMovieObject).toEqual("function");
	});

	test("createMovieObject return object with property name", () => {
		const myFavoriteMovie = createMovieObject("Home Alone", 8.5, 20);
		expect(myFavoriteMovie.name).toEqual("Home Alone");
	});

	test("createMovieObject return object with property rating", () => {
		const myFavoriteMovie = createMovieObject("Home Alone", 8.5, 20);
		expect(myFavoriteMovie.rating).toEqual(8.5);
	});

	test("createMovieObject return object with property ticketPrice", () => {
		const myFavoriteMovie = createMovieObject("Home Alone", 8.5, 20);
		expect(myFavoriteMovie.ticketPrice).toEqual(20);
	});
});
