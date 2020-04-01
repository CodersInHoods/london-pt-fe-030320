/**
 * Exercise 1
 * 
 * create a function {sayHi} which takes param
 * {name} and return 'Hi, {name}!' if you don't pass any 
 * param it should use default value for name which 
 * should be 'incognito'
 */

function sayHi(name = "incognito") {
    let greet = `Hi, ${name}!`;
    console.log(`Hi, ${name}!`);
    return greet;
}
sayHi();


/**
 * Exercise 2
 * 
 * create a function {multiply} which takes 2 numbers
 * as params, multiply them and return a result.
 * 
 * It you don't pass 1 or both params it should use 1 as 
 * a default value/values
 */
function multiply(num1 = 1, num2 = 1) {
    let result = num1 * num2;
    return result;
}
let result = multiply();
console.log(result)

/**
 * Exercise 3
 * create a function {logElements} that takes array as a param
 * by looping through it log every element. If you don't 
 * pass any array, default value of your param should be 
 * array that contains only one element - string with value "Nothing to log"
 */

function logElements(array = ["Nothing to log"]) {
    for (key of array) {
        console.log(key);
    }
    return
}
logElements(["one", "two", "four"]);

/**
 * Exercise 4
 * create a function {getUserName} that takes object with property
 * {name} as a param and return user name as a string.
 * Default value of the param should be object with property name,
 * and value "John Smith"
 */

function getUserName(object = { name: "John Smith" }) {
    name = object.name;
    console.log(object.name)
    return name;
}
getUserName();
global.console = {
	log: jest.fn()
};

// Exercise 1
describe("sayHi", () => {
	test("sayHi is declared and has type function", () => {
		expect(typeof sayHi).toEqual("function");
	});

	test("sayHi should greet with correct name", () => {
		expect(sayHi("Alex")).toEqual("Hi, Alex!");
	});

	test("sayHi should greet with incognito", () => {
		expect(sayHi()).toEqual("Hi, incognito!");
	});
});

// Exercise 2
describe("sayHi", () => {
	test("multiply is declared and has type function", () => {
		expect(typeof multiply).toEqual("function");
	});

	test("multiply should return correct value", () => {
		expect(multiply(5, 2)).toEqual(10);
	});

	test("multiply should return 5", () => {
		expect(multiply(5)).toEqual(5);
	});

	test("multiply should return 1", () => {
		expect(multiply()).toEqual(1);
	});
});

// Exercise 3
describe("logElements", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logElements is declared and has type function", () => {
		expect(typeof logElements).toEqual("function");
	});

	test("logElements should log all elements", () => {
		const param = [
			3,
			5,
			"hello",
			["cat", "dog", "panda"],
			{ name: "Alex", age: 25 }
		];

		logElements(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});

	test("logElements should log 'Nothing to log'", () => {
		logElements();

		expect(global.console.log).toHaveBeenCalledWith("Nothing to log");
	});
});

// Exercise 4
describe("getUserName", () => {
	test("getUserName is declared and has type function", () => {
		expect(typeof getUserName).toEqual("function");
	});

	test("getUserName should return correct value", () => {
		expect(getUserName({name: 'Alex Fellow'})).toEqual('Alex Fellow');
	});

	test("getUserName should return default value", () => {
		expect(getUserName()).toEqual('John Smith');
	});
});