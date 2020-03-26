/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

obj = {
    name: "benjamin",
    lastName: "poliak",
    hobby: "banjo",
    FavPlant: "begunvilia"
}

console.log(obj["lastName"]);

function logProperties(object) {
    for (param in object) {
        console.log(`Property name: ${param}`);
    }
}
logProperties(obj);

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
    const array = [];
    for (value in object) {
        array.push(object[value]);
    }
    return array;
}
newArray = getAllValues(obj)
console.log(newArray);
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
    const funcstring = [];
    for (values in object) {
        funcstring.push(object[values]);
        console.log(funcstring);
    }
    joingedfunc = funcstring.join(" ");
    console.log(joingedfunc);
    return joingedfunc;
}
stringFromObject = (getAllValuesAsString(obj));
console.log(stringFromObject);
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
console.log(`start new::`)

function propertyValueString(object) {
    let collection = ""
    for (values in object) {
        console.log(`${values}: ${object[values]}`);
    }
    return;
}
objecatAndValue = (propertyValueString(obj));
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
