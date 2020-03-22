// Exercise 1
describe("userFirstName", () => {
	test("userFirstName should be declared", () => {
		expect(userFirstName).toBeTruthy();
	});

	test("userFirstName equals to 'user' fist name", () => {
		expect(userFirstName).toEqual("Alex");
	});
});

// Exercise 2
describe("favoriteMovie", () => {
	test("favoriteMovie should be declared", () => {
		expect(favoriteMovie).toBeTruthy();
	});

	test("favoriteMovie should be a string", () => {
		expect(typeof favoriteMovie).toEqual("string");
	});

	test("favoriteMovie should have correct value", () => {
		expect(favoriteMovie).toEqual("Interstellar");
	});
});

// Exercise 3
describe("userFullName", () => {
	test("userFullName should be declared", () => {
		expect(userFullName).toBeTruthy();
	});

	test("userFullName should be declared", () => {
		expect(userFullName).toEqual("Alex Smith");
	});
});

// Exercise 4
describe("getFullName", () => {
	test("getFullName should be declared", () => {
		expect(getFullName).toBeTruthy();
	});

	test("getFullName should be a function", () => {
		expect(typeof getFullName).toEqual("function");
	});

	test("getFullName should return users full name", () => {
		expect(getFullName()).toEqual("Alex Smith");
	});
});

// Exercise 5
describe("mothersFirstName", () => {
	test("mothersFirstName should be declared", () => {
		expect(mothersFirstName).toBeTruthy();
	});

	test("mothersFirstName should be declared", () => {
		expect(mothersFirstName).toEqual("Julia");
	});
});

// Exercise 6
describe("getParentFullName", () => {
	test("getParentFullName should be declared", () => {
		expect(getParentFullName).toBeTruthy();
	});

	test("getParentFullName should be a function", () => {
		expect(typeof getParentFullName).toEqual("function");
	});

	test("getParentFullName should return mothers full name", () => {
		expect(getParentFullName("mother")).toEqual("Julia Smith");
	});

	test("getParentFullName should return fathers full name", () => {
		expect(getParentFullName("father")).toEqual("John Smith");
	});
});

// Exercise 7
describe("getUserData", () => {
	test("getUserData should be declared", () => {
		expect(getUserData).toBeTruthy();
	});

	test("getUserData should be a function", () => {
		expect(typeof getUserData).toEqual("function");
	});

	test("getUserData with param 'firstName' should return users firstName", () => {
		expect(getUserData("firstName")).toEqual("Alex");
	});

	test("getUserData with param 'age' should return users age", () => {
		expect(getUserData("age")).toEqual(26);
	});

	test("getUserData with param 'parents' should return users parents", () => {
		expect(typeof getUserData("parents")).toEqual("object");
		expect(getUserData("parents").mother.firstName).toEqual("Julia");
	});

	test("getUserData with param 'favoriteMovies' should return users favorite movies", () => {
		expect(Array.isArray(getUserData("favoriteMovies"))).toBe(true);
		expect(getUserData("favoriteMovies")[1]).toEqual("The Wolf of Wall Street");
	});
});
