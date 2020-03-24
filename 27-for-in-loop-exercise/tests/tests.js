global.console = {
	log: jest.fn()
};
// Exercise 1
describe("logProperties", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logProperties is a function", () => {
		expect(typeof logProperties).toEqual("function");
	});

	test("logProperties log every property", () => {
		const obj = {
			firstName: "Alex",
			lastName: "Smith",
			age: 25
		};

		logProperties(obj);

		for (let i = 0; i < Object.keys(obj).length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(
				i + 1,
				`Property name: ${Object.keys(obj)[i]}`
			);
		}
	});
});

// Exercise 2
describe("getAllValues", () => {
	test("getAllValues is a function", () => {
		expect(typeof logProperties).toEqual("function");
	});

	test("getAllValues return array with all values", () => {
		const obj = {
			firstName: "Alex",
			lastName: "Smith",
			age: 25
		};

		expect(getAllValues(obj)).toEqual(["Alex", "Smith", 25]);
	});
});

// Exercise 3
describe("getAllValuesAsString", () => {
	test("getAllValuesAsString is a function", () => {
		expect(typeof logProperties).toEqual("function");
	});

	test("getAllValuesAsString return all values as one string", () => {
		const obj = {
			firstName: "Alex",
			lastName: "Smith",
			age: 25
		};

		expect(getAllValuesAsString(obj)).toEqual("Alex Smith 25");
	});
});

// Exercise 4
describe("propertyValueString", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("propertyValueString is a function", () => {
		expect(typeof propertyValueString).toEqual("function");
	});

	test("propertyValueString log every property in a correct format", () => {
		const obj = {
			firstName: "Alex",
			lastName: "Smith",
			age: 25
		};

		propertyValueString(obj);

		for (let i = 0; i < Object.keys(obj).length; i++) {
			const string = `${Object.keys(obj)[i]}: ${Object.values(obj)[i]}`;
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, string);
		}
	});
});
